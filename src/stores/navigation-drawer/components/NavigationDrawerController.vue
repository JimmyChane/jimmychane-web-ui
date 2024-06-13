<script setup lang="ts">
  import { computed } from 'vue';
  import { NavigationDrawerState, useNavigationDrawerStore } from '../navigation-drawer.store';

  const navigationDrawerStore = useNavigationDrawerStore();

  const cssViewMode = computed(() => {
    if (navigationDrawerStore.isSnap) return 'snap';
    if (navigationDrawerStore.isDrawer) return 'drawer';
  });
  const cssViewState = computed(() => {
    switch (navigationDrawerStore.currentViewState) {
      case NavigationDrawerState.DRAWER_WIDE_HIDE:
        return 'drawer-hide';
      case NavigationDrawerState.DRAWER_WIDE_SHOW:
        return 'drawer-show';
    }
  });
</script>

<template>
  <div class="nav-drawer-controller" :data-view-mode="cssViewMode" :data-view-state="cssViewState">
    <div class="nav-drawer-controller-blur"></div>
    <div
      class="nav-drawer-controller-dismiss"
      style="grid-area: dismiss"
      @click="() => navigationDrawerStore.toggle()"
    ></div>
    <div class="nav-drawer-controller-body" style="grid-area: content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-drawer-controller {
    display: grid;
    grid-template-areas: 'content dismiss';

    .nav-drawer-controller-blur {
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
    .nav-drawer-controller-dismiss {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .nav-drawer-controller-body {
      height: 100dvh;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;

      position: sticky;
      top: 0;
      left: 0;
    }

    &[data-view-mode='snap'] {
      position: sticky;
      top: 0;
      left: 0;

      width: var(--navigation-drawer-width);

      .nav-drawer-controller-dismiss {
        pointer-events: none;
        display: none;
      }
      .nav-drawer-controller-blur {
        opacity: 0;
        display: none;
      }
      .nav-drawer-controller-body {
        width: var(--navigation-drawer-width);
        height: 100dvh;
        border-right: 1px solid var(--background-color-opacity5);
      }
    }
    &[data-view-mode='drawer'] {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;

      grid-template-columns: var(--navigation-drawer-width) 1fr;

      transition: width 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

      .nav-drawer-controller-body {
        width: var(--navigation-drawer-width);
        max-width: 100vw;

        transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    &[data-view-state='drawer-hide'] {
      pointer-events: none;

      .nav-drawer-controller-blur {
        opacity: 0;
        width: 100vw;
      }
      .nav-drawer-controller-body {
        transform: translateX(-100%);
      }
    }
    &[data-view-state='drawer-show'] {
      .nav-drawer-controller-blur {
        opacity: 1;
      }
      .nav-drawer-controller-body {
        transform: translateX(0%);
      }
    }
  }
</style>
