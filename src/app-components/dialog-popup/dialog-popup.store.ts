import { defineStore } from 'pinia';
import { markRaw, ref, watch, type Component } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app.store';
import { waitFrame } from '@/utils/Await';
import { newKey, wait } from '@chanzor/utils';

export type DialogPopupProps<D = undefined> = {
  dialog: DialogPopup<D>;
};

export interface DialogPopupOption<D = any> {
  data?: D;
  component: Component;
  closeOnPageChange?: boolean;
  onOpened?: (dialog: DialogPopup<D>) => void;
  onClosed?: (dialog: DialogPopup<D>) => void;
}

export class DialogPopup<D = any> {
  data: D;
  readonly component: Component;
  readonly closeOnPageChange: boolean;
  readonly onOpened?: (dialog: this) => void;
  readonly onClosed?: (dialog: this) => void;

  onBeforeClose?: (dialog: this) => boolean | Promise<boolean>;
  beforeCloseTime = 0;

  readonly key: string;
  readonly id = newKey();

  readonly siblings: DialogPopup[];

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(key: string, siblings: DialogPopup[], option: DialogPopupOption<D>) {
    this.key = key;
    this.siblings = siblings;
    this.component = markRaw(option.component);
    this.data = option.data as D;
    this.closeOnPageChange = option.closeOnPageChange ?? true;
    this.onOpened = option.onOpened;
    this.onClosed = option.onClosed;
  }

  async open(): Promise<boolean> {
    await new Promise((r) => requestAnimationFrame(() => r(undefined)));
    await new Promise((r) => setTimeout(r, 0));

    if (this.showingTime > 0) return false;

    this.showingTime = Date.now();

    if (this.isClosing) return false;
    if (this.isShowing) return false;

    this.isShowing = true;

    if (this.onOpened) this.onOpened(this);

    return true;
  }

  async beforeClose(): Promise<boolean> {
    const time = (this.beforeCloseTime = Date.now());
    if (this.onBeforeClose) {
      const toClose = await this.onBeforeClose(this);
      if (time !== this.beforeCloseTime) return false;
      if (!toClose) return false;
    }

    return this.close();
  }

  async close(): Promise<boolean> {
    if (this.closingTime > 0) return false;
    if (this.isClosing) return false;
    if (!this.isShowing) return false;

    this.isClosing = true;

    this.showingTime = Date.now();

    this.isShowing = false;
    if (this.onClosed) this.onClosed(this);

    await waitFrame();
    await wait(400);

    const index = this.siblings.indexOf(this as unknown as DialogPopup);
    this.siblings.splice(index, 1);

    return true;
  }
}

export const useDialogPopupStore = defineStore('dialog-popup', () => {
  useAppStore().useDialogPopupComponent = true;

  const route = useRoute();

  const items = ref<DialogPopup[]>([]);

  function open<D>(key: string, option: DialogPopupOption<D>): DialogPopup<D> {
    const existingItem = items.value.find((item) => item.key === key) as DialogPopup | undefined;
    if (existingItem) return existingItem as unknown as DialogPopup<D>;

    const item = new DialogPopup<D>(key, items.value as DialogPopup[], option);
    items.value.push(item as unknown as DialogPopup);
    return item;
  }

  function find<T>(key: string): DialogPopup<T> | undefined {
    return items.value.find((item) => item.key === key) as DialogPopup<T> | undefined;
  }

  function onRouteNameChange() {
    for (const item of items.value) {
      if (item.closeOnPageChange) item.close();
    }
  }

  watch(() => route.name, onRouteNameChange);

  return { items, open, find };
});
