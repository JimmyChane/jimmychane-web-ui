import { defineStore } from 'pinia';
import { ref } from 'vue';
import LightThemeIcon from '@/components/icon/LightTheme.icon.vue';
import DarkThemeIcon from '@/components/icon/DarkTheme.icon.vue';
import { defineThemeStoreDefinition, defineWindowStoreDefinition } from '@chanzor/vue-utils';

export const useAppStore = defineStore('app', () => {
  const useNavigationDrawerComponent = ref(false);
  const useBottomsheetComponent = ref(false);
  const useDialogPopupComponent = ref(false);

  return {
    useNavigationDrawerComponent,
    useBottomsheetComponent,
    useDialogPopupComponent,
  };
});

export const useThemeStore = defineStore('theme', () => {
  return defineThemeStoreDefinition({
    lightIcon: LightThemeIcon,
    darkIcon: DarkThemeIcon,
  });
});

export const useWindowStore = defineStore('window', () => {
  return defineWindowStoreDefinition();
});
