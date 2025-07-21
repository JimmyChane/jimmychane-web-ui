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
    windowStore.isLargerThanTablet ? NavigationDrawerState.SNAP_WIDE : NavigationDrawerState.DRAWER_WIDE_HIDE,
  );

  const viewStates = ref<Partial<Record<ViewState, NavigationDrawerState>>>({});

  const isShowing = computed(() => {
    switch (currentViewState.value) {
      case NavigationDrawerState.SNAP_THIN:
      case NavigationDrawerState.SNAP_WIDE:
      case NavigationDrawerState.DRAWER_WIDE_SHOW:
        return true;
    }

    return false;
  });
  const isSnap = computed(() => {
    switch (currentViewState.value) {
      case NavigationDrawerState.SNAP_THIN:
      case NavigationDrawerState.SNAP_WIDE:
        return true;
    }

    return false;
  });
  const isDrawer = computed(() => {
    switch (currentViewState.value) {
      case NavigationDrawerState.DRAWER_WIDE_HIDE:
      case NavigationDrawerState.DRAWER_WIDE_SHOW:
        return true;
    }

    return false;
  });
  const isWide = computed(() => {
    switch (currentViewState.value) {
      case NavigationDrawerState.SNAP_WIDE:
      case NavigationDrawerState.DRAWER_WIDE_HIDE:
      case NavigationDrawerState.DRAWER_WIDE_SHOW:
        return true;
    }

    return false;
  });

  const toggle = () => {
    isShowing.value ? close() : open();
  };
  const open = () => {
    const store = useWindowStore();
    if (store.isLargerThanTablet) {
      currentViewState.value = NavigationDrawerState.SNAP_WIDE;
      viewStates.value[ViewState.DESKTOP] = NavigationDrawerState.SNAP_WIDE;
      viewStates.value[ViewState.TABLET] = NavigationDrawerState.SNAP_WIDE;
      return;
    }

    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_SHOW;
    viewStates.value[ViewState.ELSE] = NavigationDrawerState.DRAWER_WIDE_SHOW;
  };
  const close = () => {
    const store = useWindowStore();

    if (store.isLargerThanTablet) {
      currentViewState.value = NavigationDrawerState.SNAP_THIN;
      viewStates.value[ViewState.DESKTOP] = NavigationDrawerState.SNAP_THIN;
      viewStates.value[ViewState.TABLET] = NavigationDrawerState.SNAP_THIN;
      return;
    }

    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_HIDE;
    viewStates.value[ViewState.ELSE] = NavigationDrawerState.DRAWER_WIDE_HIDE;
  };

  const onScreenWidthChange = () => {
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

    if (previousViewState.value === ViewState.ELSE) return;
    currentViewState.value = NavigationDrawerState.DRAWER_WIDE_HIDE;
    previousViewState.value = ViewState.ELSE;
  };
  const onScreenModeChange = () => {
    if (windowStore.isLargerThanMobile) close();
  };

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
    viewState: computed(() => currentViewState.value),
    isShowing,
    isSnap,
    isDrawer,
    isWide,
    toggle,
    open,
    close,
  };
});
