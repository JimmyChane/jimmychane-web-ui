<script setup lang="ts">
import { useScroll } from '@vueuse/core';
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { useAppStore } from '@/stores/store';

import CheeseHoles from '@/app/background/CheeseHoles.vue';
import AppStatusbar from '@/app/statusbar/App-Statusbar.vue';

import AppActionbar from './components/actionbar/App-Actionbar.vue';

const AppNavigationDrawer = defineAsyncComponent(
  () => import('./components/navigation-drawer/AppNavigationDrawer.vue'),
);
const NavigationDrawer = defineAsyncComponent(
  () => import('./components/NavigationDrawer.vue'),
);

const route = useRoute();
const appStore = useAppStore();
const navigationDrawerStore = useNavigationDrawerStore();

const layoutBodyRef = ref<HTMLDivElement>();

const cssViewMode = computed(() => {
  if (appStore.useNavigationDrawerComponent) {
    if (navigationDrawerStore.isSnap) return 'snap';
    if (navigationDrawerStore.isDrawer) return 'drawer';
  }
});

watch(route, () => (y.value = 0));

const { y } = useScroll(layoutBodyRef, { behavior: 'smooth' });
</script>

<template>
  <div class="navigation-layout" :data-view-mode="cssViewMode">
    <CheeseHoles style="z-index: 0" />

    <div ref="layoutBodyRef" class="navigation-layout-body" style="z-index: 1">
      <AppActionbar
        v-if="navigationDrawerStore.isDrawer"
        :parent-scroll-top="y"
        style="z-index: 2"
      />

      <div class="navigation-layout-router-view" style="z-index: 1">
        <RouterView v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>
      </div>

      <AppStatusbar style="z-index: 2" />
    </div>

    <NavigationDrawer
      v-if="appStore.useNavigationDrawerComponent"
      style="z-index: 2"
    >
      <AppNavigationDrawer />
    </NavigationDrawer>
  </div>
</template>

<style lang="scss">
.navigation-layout {
  --actionbar-height: 4.5rem;
  --statusbar-height: 1.5rem;
  --content-max-width: 70rem;

  position: relative;

  width: 100%;
  height: 100dvh;
  flex-grow: 1;

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: stretch;

  transition: background-color 200ms ease;

  .navigation-layout-body {
    width: 100%;
    height: 100dvh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .navigation-layout-router-view {
      width: 100%;

      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &[data-view-mode='snap'] {
    --navigation-drawer-width: 12rem;
  }
  &[data-view-mode='drawer'] {
    --navigation-drawer-width: 16rem;
  }
}
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
</style>
