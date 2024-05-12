import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useWindowStore } from '../window/window.store';
import { State } from './data/NavigationDrawer';
import { useRoute } from 'vue-router';

export const useNavigationDrawerStore = defineStore('navigation-drawer', () => {
  const route = useRoute();

  const state = ref(State.SNAP_WIDE);
  const previousView = ref('');

  const viewStates = ref<Record<string, State>>({});

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
      viewStates.value['desktop'] = State.SNAP_WIDE;
      viewStates.value['tablet'] = State.SNAP_WIDE;
      return;
    }

    if (store.isLargerThanMobile) {
      state.value = State.SNAP_WIDE;
      viewStates.value['desktop'] = State.SNAP_WIDE;
      viewStates.value['tablet'] = State.SNAP_WIDE;
      return;
    }

    state.value = State.DRAWER_WIDE_SHOW;
    viewStates.value['else'] = State.DRAWER_WIDE_SHOW;
  }
  function close() {
    const store = useWindowStore();

    if (store.isLargerThanTablet) {
      state.value = State.SNAP_THIN;
      viewStates.value['desktop'] = State.SNAP_THIN;
      viewStates.value['tablet'] = State.SNAP_THIN;
      return;
    }

    if (store.isLargerThanMobile) {
      state.value = State.SNAP_THIN;
      viewStates.value['desktop'] = State.SNAP_THIN;
      viewStates.value['tablet'] = State.SNAP_THIN;
      return;
    }

    state.value = State.DRAWER_WIDE_HIDE;
    viewStates.value['else'] = State.DRAWER_WIDE_HIDE;
  }

  function onScreenWidth() {
    const store = useWindowStore();

    if (store.isLargerThanTablet) {
      if (previousView.value === 'desktop') return;

      previousView.value = 'desktop';

      const previewViewState = viewStates.value['desktop'];
      if (previewViewState !== undefined) {
        state.value = previewViewState;
        return;
      }

      state.value = State.SNAP_WIDE;
      return;
    }

    if (store.isLargerThanMobile) {
      if (previousView.value === 'tablet') return;

      previousView.value = 'tablet';

      const previewViewState = viewStates.value['tablet'];
      if (previewViewState !== undefined) {
        state.value = previewViewState;
        return;
      }

      state.value = State.SNAP_THIN;
      return;
    }

    if (previousView.value === 'else') return;
    state.value = State.DRAWER_WIDE_HIDE;
    previousView.value = 'else';
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
