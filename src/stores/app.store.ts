import { defineStore } from 'pinia';
import { ref } from 'vue';

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
