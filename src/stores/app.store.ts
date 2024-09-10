import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const isNavigationDrawerInstalled = ref(false);

  function onInstallNavigationDrawer() {
    isNavigationDrawerInstalled.value = true;
  }

  return {
    isNavigationDrawerInstalled: computed(() => isNavigationDrawerInstalled.value),
    onInstallNavigationDrawer,
  };
});
