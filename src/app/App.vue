<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

import { LayoutId, findAppRouteById } from '@/stores/navigation.store';
import { useBottomsheetStore, useDialogStore, usePopoverStore, useThemeStore } from '@/stores/store';

import { useAppPwa } from './useAppPwa';

import AppPwaUpdate from './pwa-update/App-PwaUpdate.vue';
import AppRouteLoading from './route-loading/App-RouteLoading.vue';

const FullLayout = defineAsyncComponent(() => import('@/layout/full/Full.layout.vue'));
const NavigationLayout = defineAsyncComponent(() => import('@/layout/navigation/Navigation.layout.vue'));

const AppBottomsheet = defineAsyncComponent(() => import('@/app/bottomsheet/AppBottomsheet.vue'));
const AppDialogPopup = defineAsyncComponent(() => import('@/app/dialog-popup/AppDialogPopup.vue'));
const AppPopover = defineAsyncComponent(() => import('./popover/AppPopover.vue'));

const themeStore = useThemeStore();
const route = useRoute();

const dialogStore = useDialogStore();
const bottomsheetStore = useBottomsheetStore();
const popoverStore = usePopoverStore();

const appRoute = computed(() => findAppRouteById(route.name?.toString()));
const layoutId = computed(() => appRoute.value?.layoutId ?? LayoutId.NAVIGATION);

const { isUpdateAvailable, updateThenRefresh } = useAppPwa({ checkOnRoute: true, updateDelayTimeoutMs: 3000 });
</script>

<template>
  <div class="app" :class="themeStore.themeClass">
    <FullLayout v-if="layoutId === LayoutId.FULL" />
    <NavigationLayout v-if="layoutId === LayoutId.NAVIGATION" />

    <AppPwaUpdate :show="isUpdateAvailable" :click-update="() => updateThenRefresh()" />

    <AppBottomsheet
      v-for="overlay of bottomsheetStore.overlays"
      :style="{ 'z-index': `${3 + bottomsheetStore.overlays.length}` }"
      :key="overlay.id"
      :bottomsheet="overlay"
    />
    <AppDialogPopup
      v-for="overlay of dialogStore.overlays"
      :style="{ 'z-index': `${4 + dialogStore.overlays.length} ` }"
      :key="overlay.id"
      :dialog-popup="overlay"
    />
    <AppPopover
      v-for="overlay of popoverStore.overlays"
      :style="{ 'z-index': `${5 + popoverStore.overlays.length} ` }"
      :key="overlay.id"
      :popover="overlay"
    />

    <AppRouteLoading />
  </div>
</template>

<style scoped lang="scss">
.app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--primary-text-color);
  background-color: var(--background-color);

  position: relative;

  width: 100%;
  height: 100lvh;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  transition: background-color 200ms ease;
}
</style>
