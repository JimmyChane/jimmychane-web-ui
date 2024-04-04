<script setup lang="ts">
  import { computed } from "vue";
  import { State } from "./NavigationDrawer";
  import { useNavigationDrawerStore } from "./navigation-drawer.store";

  const navigationDrawerStore = useNavigationDrawerStore();

  const state = computed(() => navigationDrawerStore.state);
  const isSnap = computed(() => navigationDrawerStore.isSnap);
  const isDrawer = computed(() => navigationDrawerStore.isDrawer);

  const dismiss = () => navigationDrawerStore.toggle();
</script>

<template>
  <div
    class="nav-drawer-controller"
    :data-snap="isSnap"
    :data-drawer="isDrawer"
    :data-snap-thin="state === State.SNAP_THIN"
    :data-snap-wide="state === State.SNAP_WIDE"
    :data-drawer-wide-hide="state === State.DRAWER_WIDE_HIDE"
    :data-drawer-wide-show="state === State.DRAWER_WIDE_SHOW"
  >
    <div class="nav-drawer-controller-blur"></div>
    <div class="nav-drawer-controller-dismiss" @click="() => dismiss()"></div>
    <div class="nav-drawer-controller-body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-drawer-controller {
    display: grid;
    grid-template-areas: "content dismiss";

    .nav-drawer-controller-blur {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
      pointer-events: none;
      transition: all 400ms ease;
    }
    .nav-drawer-controller-dismiss {
      grid-area: dismiss;
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .nav-drawer-controller-body {
      grid-area: content;
      height: 100dvh;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;

      position: sticky;
      top: 0;
      left: 0;

      transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &[data-snap="true"] {
      width: var(--navigation-drawer-width);
      transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
        height: calc(100dvh - var(--actionbar-height));
        top: var(--actionbar-height);
      }
    }

    &[data-drawer="true"] {
      width: 100vw;
      position: fixed;
      grid-template-columns: var(--navigation-drawer-width) 1fr;

      .nav-drawer-controller-body {
        width: var(--navigation-drawer-width);
        max-width: 100vw;
      }
    }
    &[data-drawer-wide-hide="true"] {
      pointer-events: none;

      .nav-drawer-controller-blur {
        opacity: 0;
        width: 100vw;
      }
      .nav-drawer-controller-body {
        transform: translateX(-100%);
      }
    }
    &[data-drawer-wide-show="true"] {
      .nav-drawer-controller-blur {
        opacity: 1;
      }
      .nav-drawer-controller-body {
        transform: translateX(0%);
      }
    }
  }
</style>
