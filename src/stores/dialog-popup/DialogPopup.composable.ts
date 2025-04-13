import { type MaybePromise, newKey } from '@chanzor/utils';
import { type Component, computed, ref } from 'vue';

import type { DialogPopupModel } from './DialogPopup.model';
import { useDialogPopupStore } from './dialog-popup.store';

export interface UseDialogPopupOption<P = void> {
  component: Component;
  closeOnPageChange?: boolean;

  beforeApproveOpen?: (data: P) => MaybePromise<boolean | void>;

  onAfterOpen?: (dialogPopup: DialogPopupModel<P>) => void;
  onAfterClose?: (dialogPopup: DialogPopupModel<P>) => void;
}
export function useDialogPopup<P = void>(option: UseDialogPopupOption<P>) {
  const id = newKey();
  const model = ref<DialogPopupModel<P>>();

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
