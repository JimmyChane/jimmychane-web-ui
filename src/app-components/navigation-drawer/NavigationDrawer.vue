<script setup lang="ts">
import { waitFrame } from '@chanzor/vue-utils';
import { computedAsync } from '@vueuse/core';
import { computed } from 'vue';

import { NavigationDrawerState, useNavigationDrawerStore } from './navigation-drawer.store';

const navigationDrawerStore = useNavigationDrawerStore();

const cssViewMode = computed(() => {
  if (navigationDrawerStore.isSnap) return 'snap';
  if (navigationDrawerStore.isDrawer) return 'drawer';
});
const cssViewState = computedAsync(async () => {
  switch (navigationDrawerStore.currentViewState) {
    case NavigationDrawerState.DRAWER_WIDE_HIDE:
      return 'drawer-hide';
    case NavigationDrawerState.DRAWER_WIDE_SHOW:
      await waitFrame();
      return 'drawer-show';
  }
}, 'drawer-hide');
</script>

<template>
  <div
    class="navigation-drawer-controller"
    :data-view-mode="cssViewMode"
    :data-view-state="cssViewState"
  >
    <div class="navigation-drawer-controller-blur"></div>
    <div
      class="navigation-drawer-controller-dismiss"
      style="grid-area: dismiss"
      @click="() => navigationDrawerStore.toggle()"
    ></div>
    <div class="navigation-drawer-controller-body" style="grid-area: content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-drawer-controller {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'content dismiss';
  overflow: hidden;

  .navigation-drawer-controller-blur {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    transition: opacity 400ms ease;

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 0.1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }
  }
  .navigation-drawer-controller-dismiss {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .navigation-drawer-controller-body {
    position: sticky;
    top: 0;
    left: 0;

    width: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  }

  &[data-view-mode='snap'] {
    position: sticky;
    top: 0;
    left: 0;

    min-width: var(--navigation-drawer-width);
    max-width: var(--navigation-drawer-width);

    .navigation-drawer-controller-dismiss {
      pointer-events: none;
      display: none;
    }
    .navigation-drawer-controller-blur {
      opacity: 0;
      display: none;
    }
    .navigation-drawer-controller-body {
      width: 100%;
      height: 100dvh;
      border-right: 1px solid var(--background-color-opacity5);
    }
  }
  &[data-view-mode='drawer'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;

    grid-template-columns: var(--navigation-drawer-width) 1fr;

    transition: width 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

    .navigation-drawer-controller-body {
      width: var(--navigation-drawer-width);
      max-width: 100vw;

      transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  &[data-view-state='drawer-hide'] {
    pointer-events: none;

    .navigation-drawer-controller-blur {
      opacity: 0;
      width: 100vw;
    }
    .navigation-drawer-controller-body {
      transform: translateX(-100%);
    }
  }
  &[data-view-state='drawer-show'] {
    .navigation-drawer-controller-blur {
      opacity: 1;
    }
    .navigation-drawer-controller-body {
      transform: translateX(0%);
    }
  }
}
</style>
