import { type MaybePromise, newKey, wait } from '@chanzor/utils';
import { waitFrame } from '@chanzor/vue-utils';
import { watchPausable } from '@vueuse/core';
import { defineStore } from 'pinia';
import { type Ref, computed, ref } from 'vue';
import { type Component, markRaw } from 'vue';

import { useAppStore } from './store';

export enum PopoverWidth {
  AUTO = 0,
  MIN = 1,
  MAX = 2,
  SAME = 3,
}
export enum PopoverCorner {
  AUTO = 0,

  TOP,
  RIGHT,
  BOTTOM,
  LEFT,

  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,

  TOP_LEAN_LEFT,
  TOP_LEAN_RIGHT,
  BOTTOM_LEAN_LEFT,
  BOTTOM_LEAN_RIGHT,
  LEFT_LEAN_TOP,
  LEFT_LEAN_BOTTOM,
  RIGHT_LEAN_TOP,
  RIGHT_LEAN_BOTTOM,
}
export enum PopoverAlignment {
  AUTO,
  DIANGLE,
  VERTICAL,
  HORIZONTAL,
}

export interface PopoverOption<D = undefined> {
  anchor: HTMLElement;
  width?: PopoverWidth;
  corner?: PopoverCorner;
  alignment?: PopoverAlignment;

  data: D;
  component: Component;
  closeOnPageChange?: boolean;
  onOpened?: (popover: PopoverModel<D>) => void;
  onClosed?: (popover: PopoverModel<D>) => void;
}

export class PopoverModel<D = undefined> {
  data: D;
  readonly component: Component;
  readonly closeOnPageChange: boolean;
  readonly onOpened?: (dialogPopup: this) => void;
  readonly onClosed?: (dialogPopup: this) => void;

  onBeforeClose?: (dialogPopup: this) => boolean | Promise<boolean>;
  beforeCloseTime = 0;

  anchor: HTMLElement;
  readonly key: string;
  readonly timeCreate = newKey();

  readonly siblings: PopoverModel[];

  width: PopoverWidth;
  corner: PopoverCorner;
  alignment?: PopoverAlignment;

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(key: string, option: PopoverOption<D>, siblings: PopoverModel[]) {
    this.key = key;
    this.siblings = siblings;
    this.component = markRaw(option.component);

    this.anchor = option.anchor;
    this.width = option?.width ?? PopoverWidth.AUTO;
    this.corner = option?.corner ?? PopoverCorner.AUTO;

    this.data = option.data as D;
    this.closeOnPageChange = option.closeOnPageChange ?? true;
    this.onOpened = option.onOpened;
    this.onClosed = option.onClosed;
  }

  async open(): Promise<void> {
    await waitFrame();

    if (this.showingTime > 0) return;

    this.showingTime = Date.now();

    if (this.isClosing || this.isShowing) return;

    this.isShowing = true;

    if (this.onOpened) this.onOpened(this);
  }

  async beforeClose(): Promise<void> {
    const time = (this.beforeCloseTime = Date.now());
    if (this.onBeforeClose) {
      const toClose = await this.onBeforeClose(this);
      if (time !== this.beforeCloseTime) return;
      if (!toClose) return;
    }

    await this.close();
  }

  async close(): Promise<void> {
    if (this.closingTime > 0 || this.isClosing || !this.isShowing) return;

    this.isClosing = true;

    this.showingTime = Date.now();

    this.isShowing = false;
    if (this.onClosed) this.onClosed(this);

    await wait(150);
    await waitFrame();

    const index = this.siblings.indexOf(this as unknown as PopoverModel);
    this.siblings.splice(index, 1);
  }
}

export type PopoverProps<D = undefined> = { popover: PopoverModel<D> };

export const usePopoverStore = defineStore('popover', () => {
  useAppStore().usePopoverComponent = true;

  // todo: rename to models
  const items = ref<PopoverModel[]>([]);

  function open<D = undefined>(key: string | undefined, option: PopoverOption<D>): PopoverModel<D> {
    if (key?.length) {
      const existingItem = items.value.find((item) => item.key === key) as PopoverModel | undefined;
      if (existingItem) return existingItem as unknown as PopoverModel<D>;
    }

    const item = new PopoverModel<D>(key ?? `${newKey()}`, option, items.value as PopoverModel[]);
    items.value.push(item as unknown as PopoverModel);
    return item;
  }

  function find<D = undefined>(key: string): PopoverModel<D> | undefined {
    return items.value.find((item) => item.key === key) as PopoverModel<D> | undefined;
  }

  return { items, open, find };
});

export interface UsePopupMenuOption<D = void> {
  anchor: Ref<HTMLElement | null | undefined>;
  width?: PopoverWidth;
  corner?: PopoverCorner;
  alignment?: PopoverAlignment;

  component: Component;
  closeOnPageChange?: boolean;

  beforeApproveOpen?: (data: D) => MaybePromise<boolean | void>;

  onAfterOpen?: (popover: PopoverModel<D>) => void;
  onAfterClose?: (popover: PopoverModel<D>) => void;
}
export function usePopover<D = void>(option: UsePopupMenuOption<D>) {
  const id = newKey();
  const current = ref<PopoverModel<D>>();

  const waitingAnchor = ref<HTMLElement | null | undefined>();

  async function reopen(data: D) {
    await close();
    await open(data);
  }

  async function open(data: D) {
    if (current.value) return;

    const isApproved = (await option.beforeApproveOpen?.(data)) ?? true;

    if (isApproved) {
      if (waitingAnchor.value) waitingAnchor.value = undefined;

      if (!option.anchor.value) {
        waitingAnchor.value = option.anchor.value;

        const { stop: stopWatchAnchor } = watchPausable(option.anchor, () => {
          if (!option.anchor.value) return;

          stopWatchAnchor();

          if (option.anchor.value === waitingAnchor.value) {
            waitingAnchor.value = undefined;
            openByAnchor(option.anchor.value, data);
          }
        });
        return;
      }

      openByAnchor(option.anchor.value, data);
    }
  }
  function openByAnchor(anchor: HTMLElement, data: D) {
    usePopoverStore().open<D>(`${id}`, {
      data,
      anchor,
      alignment: option.alignment,
      corner: option.corner,
      component: option.component,
      onOpened(popover) {
        current.value = popover;
        option.onAfterOpen?.(popover);
      },
      onClosed(popover) {
        current.value = undefined;
        option.onAfterClose?.(popover);
      },
      closeOnPageChange: option.closeOnPageChange,
      width: option.width,
    });
  }

  async function close() {
    await current.value?.close();
  }

  return { reopen, open, close, current: computed(() => current.value) };
}
