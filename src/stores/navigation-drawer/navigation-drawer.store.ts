import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useWindowStore } from '../window/window.store';
import { State } from './data/NavigationDrawer';
import { useRoute } from 'vue-router';

enum ViewState {
  DESKTOP,
  TABLET,
  ELSE,
}

export const useNavigationDrawerStore = defineStore('navigation-drawer', () => {
  const route = useRoute();
  const windowStore = useWindowStore();

  const state = ref(State.SNAP_WIDE);
  const previousView = ref<ViewState>();

  const viewStates = ref<Partial<Record<ViewState, State>>>({});

  const isShowing = computed(() => [State.SNAP_WIDE, State.DRAWER_WIDE_SHOW].includes(state.value));
  const isSnap = computed(() => [State.SNAP_THIN, State.SNAP_WIDE].includes(state.value));
  const isDrawer = computed(() =>
    [State.DRAWER_WIDE_HIDE, State.DRAWER_WIDE_SHOW].includes(state.value),
  );
  const isWide = computed(() =>
    [State.SNAP_WIDE, State.DRAWER_WIDE_HIDE, State.DRAWER_WIDE_SHOW].includes(state.value),
  );

  function toggle() {
    return isShowing.value ? close() : open();
  }
  function open() {
    const store = useWindowStore();
    if (store.isLargerThanTablet) {
      state.value = State.SNAP_WIDE;
      viewStates.value[ViewState.DESKTOP] = State.SNAP_WIDE;
      viewStates.value[ViewState.TABLET] = State.SNAP_WIDE;
      return;
    }

    if (store.isLargerThanMobile) {
      state.value = State.SNAP_WIDE;
      viewStates.value[ViewState.DESKTOP] = State.SNAP_WIDE;
      viewStates.value[ViewState.TABLET] = State.SNAP_WIDE;
      return;
    }

    state.value = State.DRAWER_WIDE_SHOW;
    viewStates.value[ViewState.ELSE] = State.DRAWER_WIDE_SHOW;
  }
  function close() {
    const store = useWindowStore();

    if (store.isLargerThanTablet) {
      state.value = State.SNAP_THIN;
      viewStates.value[ViewState.DESKTOP] = State.SNAP_THIN;
      viewStates.value[ViewState.TABLET] = State.SNAP_THIN;
      return;
    }

    if (store.isLargerThanMobile) {
      state.value = State.SNAP_THIN;
      viewStates.value[ViewState.DESKTOP] = State.SNAP_THIN;
      viewStates.value[ViewState.TABLET] = State.SNAP_THIN;
      return;
    }

    state.value = State.DRAWER_WIDE_HIDE;
    viewStates.value[ViewState.ELSE] = State.DRAWER_WIDE_HIDE;
  }

  function onScreenWidth() {
    if (windowStore.isLargerThanTablet) {
      if (previousView.value === ViewState.DESKTOP) return;

      previousView.value = ViewState.DESKTOP;

      const previewViewState = viewStates.value[ViewState.DESKTOP];
      if (previewViewState !== undefined) {
        state.value = previewViewState;
        return;
      }

      state.value = State.SNAP_WIDE;
      return;
    }

    if (windowStore.isLargerThanMobile) {
      if (previousView.value === ViewState.TABLET) return;

      previousView.value = ViewState.TABLET;

      const previewViewState = viewStates.value[ViewState.TABLET];
      if (previewViewState !== undefined) {
        state.value = previewViewState;
        return;
      }

      state.value = State.SNAP_THIN;
      return;
    }

    if (previousView.value === ViewState.ELSE) return;
    state.value = State.DRAWER_WIDE_HIDE;
    previousView.value = ViewState.ELSE;
  }

  watch(() => useWindowStore().width, onScreenWidth);
  watch(() => route.fullPath, close);
  close();

  return {
    state: computed(() => state.value),
    isShowing,
    isSnap,
    isDrawer,
    isWide,
    toggle,
    open,
    close,
  };
});
