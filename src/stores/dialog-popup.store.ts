import { type MaybePromise, newKey, wait } from '@chanzor/utils';
import { waitFrame } from '@chanzor/vue-utils';
import { defineStore } from 'pinia';
import { type Component, computed, markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAppStore } from './store';

export interface DialogPopupOption<P = any> {
  prop?: P;
  component: Component;
  closeOnPageChange?: boolean;
  onAfterOpen?: (dialogPopup: DialogPopup<P>) => void;
  onAfterClose?: (dialogPopup: DialogPopup<P>) => void;
}
export type DialogPopupProp<P = void> = { dialogPopup: DialogPopup<P> };

export class DialogPopup<P = any> {
  prop: P;
  readonly component: Component;
  readonly closeOnPageChange: boolean;
  readonly onOpened?: (dialogPopup: this) => void;
  readonly onClosed?: (dialogPopup: this) => void;

  onBeforeClose?: (dialogPopup: this) => boolean | Promise<boolean>;
  beforeCloseTime = 0;

  readonly id: string;

  readonly siblings: DialogPopup[];

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(key: string, siblings: DialogPopup[], option: DialogPopupOption<P>) {
    this.id = key;
    this.siblings = siblings;
    this.component = markRaw(option.component);
    this.prop = option.prop as P;
    this.closeOnPageChange = option.closeOnPageChange ?? true;
    this.onOpened = option.onAfterOpen;
    this.onClosed = option.onAfterClose;
  }

  async open(): Promise<boolean> {
    await waitFrame();

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

    await wait(400);
    await waitFrame();

    const index = this.siblings.indexOf(this as unknown as DialogPopup);
    this.siblings.splice(index, 1);

    return true;
  }
}

export const useDialogPopupStore = defineStore('dialog-popup', () => {
  useAppStore().useDialogPopupComponent = true;

  const route = useRoute();

  const items = ref<DialogPopup[]>([]);

  const open = <P>(key: string, option: DialogPopupOption<P>): DialogPopup<P> => {
    const existingItem = items.value.find((item) => item.id === key) as DialogPopup | undefined;
    if (existingItem) return existingItem as unknown as DialogPopup<P>;

    const item = new DialogPopup<P>(key, items.value as DialogPopup[], option);
    items.value.push(item as unknown as DialogPopup);
    return item;
  };

  const find = <P>(key: string): DialogPopup<P> | undefined => {
    return items.value.find((item) => item.id === key) as DialogPopup<P> | undefined;
  };

  watch([() => route.name], () => {
    for (const item of items.value) {
      if (item.closeOnPageChange) item.close();
    }
  });

  return { items, open, find };
});

export interface UseDialogPopupOption<P = void> {
  component: Component;
  closeOnPageChange?: boolean;

  beforeApproveOpen?: (data: P) => MaybePromise<boolean | void>;

  onAfterOpen?: (dialogPopup: DialogPopup<P>) => void;
  onAfterClose?: (dialogPopup: DialogPopup<P>) => void;
}
export function useDialogPopup<P = void>(option: UseDialogPopupOption<P>) {
  const id = newKey();
  const model = ref<DialogPopup<P>>();

  const open = async (prop: P): Promise<void> => {
    if (model.value) return;

    const isApproved = (await option.beforeApproveOpen?.(prop)) ?? true;

    if (isApproved) {
      useDialogPopupStore().open<P>(`${id}`, {
        prop,
        component: option.component,
        closeOnPageChange: option.closeOnPageChange,
        onAfterOpen: (popup) => {
          model.value = popup;
          option.onAfterOpen?.(popup);
        },
        onAfterClose: (popup) => {
          model.value = undefined;
          option.onAfterClose?.(popup);
        },
      });
    }
  };
  const close = async (): Promise<void> => {
    await model.value?.close();
  };

  return { open, close, model: computed(() => model.value) };
}
