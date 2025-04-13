import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAppStore } from '../store';
import { DialogPopupModel, type DialogPopupOption } from './DialogPopup.model';

export const useDialogPopupStore = defineStore('dialog-popup', () => {
  useAppStore().useDialogPopupComponent = true;

  const route = useRoute();

  const overlays = ref<DialogPopupModel[]>([]);

  const open = <P>(key: string, option: DialogPopupOption<P>): DialogPopupModel<P> => {
    const existingOverlay = (overlays.value as DialogPopupModel[]).find((item) => item.id === key);
    if (existingOverlay) return existingOverlay as DialogPopupModel<P>;

    const overlay = new DialogPopupModel<P>(overlays.value, key, option);
    overlays.value.push(overlay as DialogPopupModel);
    return overlay;
  };

  const find = <P>(key: string): DialogPopupModel<P> | undefined => {
    return overlays.value.find((overlay) => overlay.id === key) as DialogPopupModel<P> | undefined;
  };

  watch([() => route.name], () => {
    for (const overlay of overlays.value) {
      if (overlay.closeOnPageChange) overlay.close();
    }
  });

  return { overlays, open, find };
});
