<script setup lang="ts">
import { useScroll } from '@vueuse/core';
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { useAppStore, useBottomsheetStore, useDialogStore } from '@/stores/store';

import AppActionbar from '@/app/actionbar/App-Actionbar.vue';
import CheeseHoles from '@/app/background/CheeseHoles.vue';
import AppStatusbar from '@/app/statusbar/App-Statusbar.vue';

const AppNavigationDrawer = defineAsyncComponent(
  () => import('@/app/navigation-drawer/AppNavigationDrawer.vue'),
);
const NavigationDrawer = defineAsyncComponent(
  () => import('@/app-components/navigation-drawer/NavigationDrawer.vue'),
);
const Bottomsheet = defineAsyncComponent(
  () => import('@/app-components/bottomsheet/Bottomsheet.vue'),
);
const DialogPopup = defineAsyncComponent(
  () => import('@/app-components/dialog-popup/DialogPopup.vue'),
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

    <NavigationDrawer v-if="appStore.useNavigationDrawerComponent" style="z-index: 2">
      <AppNavigationDrawer />
    </NavigationDrawer>
    <Bottomsheet
      v-if="appStore.useBottomsheetComponent"
      v-for="item of useBottomsheetStore().items"
      :style="{ 'z-index': `${3 + useBottomsheetStore().items.length}` }"
      :key="item.id"
      :bottomsheet="item"
    />
    <DialogPopup
      v-if="appStore.useDialogPopupComponent"
      v-for="item of useDialogStore().items"
      :style="{ 'z-index': `${4 + useDialogStore().items.length} ` }"
      :key="item.id"
      :dialog="item"
    />
  </div>
</template>

<style lang="scss">
.navigation-layout {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --actionbar-height: 4.5rem;
  --statusbar-height: 1.5rem;
  --content-max-width: 70rem;

  color: var(--color-active);
  background-color: var(--background-color);

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
