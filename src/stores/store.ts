import {
  defineBottomsheetStoreDefinition,
  defineDialogStoreDefinition,
  defineThemeStoreDefinition,
  defineWindowStoreDefinition,
} from '@chanzor/vue-utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import DarkThemeIcon from '@/components/icon/DarkTheme.icon.vue';
import LightThemeIcon from '@/components/icon/LightTheme.icon.vue';

export const useAppStore = defineStore('app', () => {
  const useNavigationDrawerComponent = ref(false);
  const useBottomsheetComponent = ref(false);
  const useDialogPopupComponent = ref(false);

  return { useNavigationDrawerComponent, useBottomsheetComponent, useDialogPopupComponent };
});

export const useThemeStore = defineStore('theme', () => {
  return defineThemeStoreDefinition({ lightIcon: LightThemeIcon, darkIcon: DarkThemeIcon });
});

export const useWindowStore = defineStore('window', () => {
  return defineWindowStoreDefinition();
});

export const useBottomsheetStore = defineStore('bottomsheet', () => {
  return defineBottomsheetStoreDefinition({
    onCreated() {
      useAppStore().useBottomsheetComponent = true;
    },
  });
});

export const useDialogStore = defineStore('dialog-popup', () => {
  return defineDialogStoreDefinition({
    onCreated() {
      useAppStore().useDialogPopupComponent = true;
    },
  });
});
