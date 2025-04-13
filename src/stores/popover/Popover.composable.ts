import { type MaybePromise, newKey } from '@chanzor/utils';
import { watchPausable } from '@vueuse/core';
import { type Component, type Ref, computed, ref } from 'vue';

import type { PopoverAlignment, PopoverCorner, PopoverModel, PopoverWidth } from './Popover.model';
import { usePopoverStore } from './popover.store';

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

  const reopen = async (data: D) => {
    await close();
    await open(data);
  };

  const open = async (data: D) => {
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
  };
  const openByAnchor = (anchor: HTMLElement, data: D) => {
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
  };

  const close = async () => {
    await current.value?.close();
  };

  return { reopen, open, close, current: computed(() => current.value) };
}
