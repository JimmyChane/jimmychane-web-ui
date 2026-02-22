<script setup lang="ts">
import { useAsyncComponent } from '@chanzor/vue-use';
import { useScroll } from '@vueuse/core';
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { useAppStore } from '@/stores/store';

import AppCheeseHoles from '@/app/background/AppCheeseHoles.vue';
import AppStatusbar from '@/app/statusbar/App-Statusbar.vue';

import AppActionbar from './components/actionbar/App-Actionbar.vue';

const { Component: AppNavigationDrawer, isLoaded: isNavigationDrawerLoaded } = useAsyncComponent(
  () => import('./components/navigation-drawer/AppNavigationDrawer.vue'),
);

const route = useRoute();
const appStore = useAppStore();
const navigationDrawerStore = useNavigationDrawerStore();

const isMounted = ref(false);

const layoutBodyRef = useTemplateRef('layoutBodyRef');

const show = computed(() => {
  if (isMounted.value) return true;
  if (!navigationDrawerStore.isSnap) return true;
  return isNavigationDrawerLoaded.value;
});

const { y } = useScroll(layoutBodyRef, { behavior: 'smooth' });

watch(route, () => (y.value = 0));

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="navigation-layout" :data-show="show">
    <AppCheeseHoles style="z-index: 0" />

    <div ref="layoutBodyRef" class="navigation-layout-body" style="z-index: 1">
      <AppActionbar v-if="navigationDrawerStore.isDrawer" :parent-scroll-top="y" style="z-index: 2" />

      <div class="navigation-layout-router-view" style="z-index: 1">
        <RouterView v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>
      </div>

      <AppStatusbar style="z-index: 2" />
    </div>

    <AppNavigationDrawer v-if="appStore.useNavigationDrawerComponent" style="z-index: 2" />
  </div>
</template>

<style lang="scss">
.navigation-layout {
  --actionbar-height: 4.5rem;
  --statusbar-height: 1.5rem;
  --content-max-width: 70rem;

  position: relative;

  z-index: 1;
  width: 100%;
  height: 100lvh;
  flex-grow: 1;
  overflow: hidden;

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: stretch;

  transition: 200ms ease;
  transition-property: opacity background-color;

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
      height: 100%;
      min-height: max-content;

      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &[data-show='false'] {
    opacity: 0;
  }
  &[data-show='true'] {
    opacity: 1;
  }
}
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
</style>
