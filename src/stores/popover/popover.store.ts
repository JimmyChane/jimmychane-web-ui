import { newKey } from '@chanzor/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useAppStore } from '../store';
import { PopoverModel, type PopoverOption } from './Popover.model';

export type PopoverProps<D = undefined> = { popover: PopoverModel<D> };

export const usePopoverStore = defineStore('popover', () => {
  useAppStore().usePopoverComponent = true;

  const overlays = ref<PopoverModel[]>([]);

  const open = <D = undefined>(key: string | undefined, option: PopoverOption<D>): PopoverModel<D> => {
    if (key?.length) {
      const existingOverlay = (overlays.value as PopoverModel[]).find((item) => item.id === key);
      if (existingOverlay) return existingOverlay as unknown as PopoverModel<D>;
    }

    const overlay = new PopoverModel<D>(overlays.value, key ?? `${newKey()}`, option);
    overlays.value.push(overlay as unknown as PopoverModel);
    return overlay;
  };

  const find = <D = undefined>(key: string): PopoverModel<D> | undefined => {
    return overlays.value.find((overlay) => overlay.id === key) as PopoverModel<D> | undefined;
  };

  return { overlays, open, find };
});
