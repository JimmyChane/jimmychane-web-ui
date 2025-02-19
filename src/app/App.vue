<script setup lang="ts">
import { ThemeId } from '@chanzor/vue-utils';
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

import { LayoutId, findAppRouteById } from '@/stores/navigation.store';
import { useAppStore, useBottomsheetStore, useDialogStore, useThemeStore } from '@/stores/store';

const FullLayout = defineAsyncComponent(() => import('@/layout/full/Full.layout.vue'));
const NavigationLayout = defineAsyncComponent(
  () => import('@/layout/navigation/Navigation.layout.vue'),
);

const Bottomsheet = defineAsyncComponent(() => import('@/app/bottomsheet/Bottomsheet.vue'));
const DialogPopup = defineAsyncComponent(() => import('@/app/dialog-popup/DialogPopup.vue'));

const appStore = useAppStore();
const themeStore = useThemeStore();
const route = useRoute();
const appRoute = computed(() => findAppRouteById(route.name?.toString()));
const layoutId = computed(() => appRoute.value?.layoutId ?? LayoutId.NAVIGATION);
</script>

<template>
  <div class="app" :data-dark="themeStore.theme.id === ThemeId.DARK">
    <FullLayout v-if="layoutId === LayoutId.FULL" />
    <NavigationLayout v-if="layoutId === LayoutId.NAVIGATION" />
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
.app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--color-active);
  background-color: var(--background-color);

  position: relative;

  width: 100%;
  height: 100dvh;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  transition: background-color 200ms ease;

  &[data-dark='false'] {
    --color: #fff48c;
    --color-dark: #74500e;
    --color-active: var(--color-dark);
    --color-hover: rgba(231, 220, 124, 0.4);

    --text-color: hsl(0, 0%, 0%);
    --text-color-opacity5: hsla(0, 0%, 0%, 0.05);
    --text-color-opacity30: hsla(0, 0%, 0%, 0.3);
    --text-color-opacity50: hsla(0, 0%, 0%, 0.5);
    --text-color-opacity70: hsla(0, 0%, 0%, 0.7);
    --text-color-opacity90: hsla(0, 0%, 0%, 0.9);

    --background-color: #fdf8c8;
    --background-color-opacity5: hsla(0, 0%, 100%, 0.05);
    --background-color-opacity50: hsla(0, 0%, 100%, 0.5);
    --background-color-opacity60: hsla(0, 0%, 100%, 0.6);
    --background-color-opacity70: hsla(0, 0%, 100%, 0.7);
    --background-color-opacity90: hsla(0, 0%, 100%, 0.9);
    --background-color-opacity100: hsla(0, 0%, 100%, 1);

    --actionbar-background-color-opacity70: hsla(54, 96%, 89%, 0.7);

    --icon-light-invert: invert(100%);
    --icon-dark-invert: invert(0%);

    --section-fursona-header-background-color: rgb(180, 231, 224);
    --section-fursona-background-color: #5ba097;
    --section-fursona-text-color: rgb(2, 32, 28);

    --cheese-color: #f6e97756;
    --cheese-color-pfp: var(--cheese-color);
  }
  &[data-dark='true'] {
    --color: #b6862d;
    --color-dark: #3a2807;
    --color-active: var(--text-color);
    --color-hover: rgba(69, 68, 65, 0.4);

    --text-color: hsl(0, 0%, 100%);
    --text-color-opacity5: hsla(0, 0%, 100%, 0.05);
    --text-color-opacity50: hsla(0, 0%, 100%, 0.5);
    --text-color-opacity70: hsla(0, 0%, 100%, 0.7);
    --text-color-opacity90: hsla(0, 0%, 100%, 0.9);

    --background-color: #1a1d21;
    --background-color-opacity5: hsla(0, 0%, 0%, 0.05);
    --background-color-opacity20: hsla(0, 0%, 0%, 0.2);
    --background-color-opacity50: hsla(0, 0%, 0%, 0.5);
    --background-color-opacity60: hsla(0, 0%, 0%, 0.6);
    --background-color-opacity70: hsla(0, 0%, 0%, 0.7);
    --background-color-opacity90: hsla(0, 0%, 0%, 0.9);
    --background-color-opacity100: hsla(0, 0%, 0%, 1);

    --actionbar-background-color-opacity70: hsla(0, 0%, 0%, 0.7);

    --icon-light-invert: invert(0%);
    --icon-dark-invert: invert(100%);

    --section-fursona-header-background-color: rgb(56, 80, 77);
    --section-fursona-background-color: rgb(41, 58, 56);
    --section-fursona-text-color: var(--text-color);

    --cheese-color: hsla(0, 0%, 0%, 0.15);
    --cheese-color-pfp: var(--background-color-opacity70);
  }
}
</style>
