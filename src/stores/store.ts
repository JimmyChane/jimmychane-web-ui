import { defineBottomsheetStore, defineUseBottomsheet } from '@chanzor/vue-bottomsheet';
import { defineDialogStore, defineUseDialog } from '@chanzor/vue-dialog';
import { definePopoverStore, defineUsePopover } from '@chanzor/vue-popover';
import { defineThemeStore, defineWindowStore } from '@chanzor/vue-utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const useNavigationDrawerComponent = ref(false);

  return { useNavigationDrawerComponent };
});

export const useThemeStore = defineStore('theme', () => defineThemeStore());

export const useWindowStore = defineStore('window', () => defineWindowStore());

// DIALOG

export const useDialogStore = defineStore('dialog', () => defineDialogStore());

export const useDialog = defineUseDialog({ getStore: () => useDialogStore() });

// BOTTOMSHEET

export const useBottomsheetStore = defineStore('bottomsheet', () => defineBottomsheetStore());

export const useBottomsheet = defineUseBottomsheet({ getStore: () => useBottomsheetStore() });

// POPOVER

export const usePopoverStore = defineStore('popover', () => definePopoverStore());

export const usePopover = defineUsePopover({ getStore: () => usePopoverStore() });
