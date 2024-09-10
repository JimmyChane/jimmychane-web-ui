import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const isNavigationDrawerInstalled = ref(false);
  const isBottomsheetInstalled = ref(false);
  const isDialogInstalled = ref(false);

  function onInstallNavigationDrawer() {
    isNavigationDrawerInstalled.value = true;
  }
  function onInstallBottomsheet() {
    isBottomsheetInstalled.value = true;
  }
  function onInstallDialog() {
    isDialogInstalled.value = true;
  }

  return {
    isNavigationDrawerInstalled: computed(() => isNavigationDrawerInstalled.value),
    isBottomsheetInstalled: computed(() => isBottomsheetInstalled.value),

    onInstallNavigationDrawer,
    onInstallBottomsheet,
    onInstallDialog,
  };
});
