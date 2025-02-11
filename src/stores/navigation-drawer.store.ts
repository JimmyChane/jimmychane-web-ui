import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAppStore, useWindowStore } from '@/stores/store';

enum ViewState {
  DESKTOP,
  TABLET,
  ELSE,
}

export enum NavigationDrawerState {
  SNAP_THIN,
  SNAP_WIDE,
  DRAWER_WIDE_HIDE,
  DRAWER_WIDE_SHOW,
}

export const useNavigationDrawerStore = defineStore('navigation-drawer', () => {
  const route = useRoute();
  const windowStore = useWindowStore();

  const previousViewState = ref<ViewState>();
  const currentViewState = ref(
    windowStore.isLargerThanTablet
      ? NavigationDrawerState.SNAP_WIDE
      : NavigationDrawerState.DRAWER_WIDE_HIDE,
  );

  const viewStates = ref<Partial<Record<ViewState, NavigationDrawerState>>>({});

  const isShowing = computed(() => {
    return [NavigationDrawerState.SNAP_WIDE, NavigationDrawerState.DRAWER_WIDE_SHOW].includes(
      currentViewState.value,
    );
  });
  const isSnap = computed(() => {
    return [NavigationDrawerState.SNAP_THIN, NavigationDrawerState.SNAP_WIDE].includes(
      currentViewState.value,
    );
  });
  const isDrawer = computed(() => {
    return [
      NavigationDrawerState.DRAWER_WIDE_HIDE,
      NavigationDrawerState.DRAWER_WIDE_SHOW,
    ].includes(currentViewState.value);
  });
  const isWide = computed(() => {
    return [
      NavigationDrawerState.SNAP_WIDE,
      NavigationDrawerState.DRAWER_WIDE_HIDE,
      NavigationDrawerState.DRAWER_WIDE_SHOW,
    ].includes(currentViewState.value);
  });

  function toggle() {
    return isShowing.value ? close() : open();
  }
  function open() {
    const store = useWindowStore();
    if (store.isLargerThanTablet) {
      currentViewState.value = NavigationDrawerState.SNAP_WIDE;
      viewStates.value[ViewState.DESKTOP] = NavigationDrawerState.SNAP_WIDE;
      viewStates.value[ViewState.TABLET] = NavigationDrawerState.SNAP_WIDE;
      return;
    }

    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_SHOW;
    viewStates.value[ViewState.ELSE] = NavigationDrawerState.DRAWER_WIDE_SHOW;
  }
  function close() {
    const store = useWindowStore();

    if (store.isLargerThanTablet) {
      currentViewState.value = NavigationDrawerState.SNAP_THIN;
      viewStates.value[ViewState.DESKTOP] = NavigationDrawerState.SNAP_THIN;
      viewStates.value[ViewState.TABLET] = NavigationDrawerState.SNAP_THIN;
      return;
    }

    // if (store.isLargerThanMobile) {
    //   currentViewState.value = NavigationDrawerState.SNAP_THIN;
    //   viewStates.value[ViewState.DESKTOP] = NavigationDrawerState.SNAP_THIN;
    //   viewStates.value[ViewState.TABLET] = NavigationDrawerState.SNAP_THIN;
    //   return;
    // }

    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_HIDE;
    viewStates.value[ViewState.ELSE] = NavigationDrawerState.DRAWER_WIDE_HIDE;
  }

  function onScreenWidthChange() {
    if (windowStore.isLargerThanTablet) {
      if (previousViewState.value === ViewState.DESKTOP) return;

      previousViewState.value = ViewState.DESKTOP;

      const previewViewState = viewStates.value[ViewState.DESKTOP];
      if (previewViewState !== undefined) {
        currentViewState.value = previewViewState;
        return;
      }

      currentViewState.value = NavigationDrawerState.SNAP_WIDE;
      return;
    }

    // if (windowStore.isLargerThanMobile) {
    //   if (previousViewState.value === ViewState.TABLET) return;

    //   previousViewState.value = ViewState.TABLET;

    //   const previewViewState = viewStates.value[ViewState.TABLET];
    //   if (previewViewState !== undefined) {
    //     currentViewState.value = previewViewState;
    //     return;
    //   }

    //   currentViewState.value = NavigationDrawerState.SNAP_THIN;
    //   return;
    // }

    if (previousViewState.value === ViewState.ELSE) return;
    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_HIDE;
    previousViewState.value = ViewState.ELSE;
  }
  function onScreenModeChange() {
    if (windowStore.isLargerThanMobile) close();
  }

  watch(() => windowStore.width, onScreenWidthChange);
  watch(() => windowStore.isLargerThanMobile, onScreenModeChange);
  watch(() => route.fullPath, close);
  watch(
    isShowing,
    () => {
      if (isShowing.value) useAppStore().useNavigationDrawerComponent = true;
    },
    { immediate: true },
  );

  close();

  return {
    currentViewState: computed(() => currentViewState.value),

    isShowing,
    isSnap,
    isDrawer,
    isWide,

    toggle,
    open,
    close,
  };
});
