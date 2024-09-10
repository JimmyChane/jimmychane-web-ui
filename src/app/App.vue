<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppActionbar from '@/app/actionbar/App-Actionbar.vue';
import AppStatusbar from './statusbar/App-Statusbar.vue';
import CheeseHoles from '@/app/background/CheeseHoles.vue';
import { DarkTheme, useThemeStore } from '@/stores/theme.store';
import { useNavigationDrawerStore } from '@/app-components/navigation-drawer/navigation-drawer.store';
import { useAppStore } from '@/stores/app.store';
import { useBottomsheetStore } from '@/app-components/bottomsheet/bottomsheet.store';
import { useScroll } from '@vueuse/core';
import { useDialogPopupStore } from '@/app-components/dialog-popup/dialog-popup.store';

const AppNavigationDrawer = defineAsyncComponent(
  () => import('./navigation-drawer/AppNavigationDrawer.vue'),
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
const themeStore = useThemeStore();
const navigationDrawerStore = useNavigationDrawerStore();

const appBodyRef = ref<HTMLDivElement>();

const cssViewMode = computed(() => {
  if (appStore.isNavigationDrawerInstalled) {
    if (navigationDrawerStore.isSnap) return 'snap';
    if (navigationDrawerStore.isDrawer) return 'drawer';
  }
});

watch(route, () => (y.value = 0));

const { y } = useScroll(appBodyRef, { behavior: 'smooth' });
</script>

<template>
  <div
    class="App"
    :data-view-mode="cssViewMode"
    :data-dark="themeStore.theme.key === DarkTheme.key"
  >
    <CheeseHoles style="z-index: 0" />

    <div ref="appBodyRef" class="App-body" style="z-index: 1">
      <AppActionbar
        v-if="useNavigationDrawerStore().isDrawer"
        :parent-scroll-top="y"
        style="z-index: 2"
      />

      <div class="App-router-view" style="z-index: 1">
        <RouterView v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>
      </div>

      <AppStatusbar style="z-index: 2" />
    </div>

    <NavigationDrawer v-if="appStore.isNavigationDrawerInstalled" style="z-index: 2">
      <AppNavigationDrawer />
    </NavigationDrawer>
    <Bottomsheet
      v-if="appStore.isBottomsheetInstalled"
      v-for="item of useBottomsheetStore().items"
      :style="{ 'z-index': `${3 + useBottomsheetStore().items.length}` }"
      :key="item.id"
      :bottomsheet="item"
    />
    <DialogPopup
      v-for="item of useDialogPopupStore().items"
      :style="{ 'z-index': `${4 + useDialogPopupStore().items.length} ` }"
      :key="item.id"
      :dialog="item"
    />
  </div>
</template>

<style lang="scss">
.App {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --actionbar-height: 4.5rem;
  --statusbar-height: 1.5rem;
  --content-max-width: 70rem;

  color: var(--color-active);
  background: var(--background-color);

  position: relative;

  width: 100%;
  height: max-content;
  height: 100dvh;
  min-height: 100dvh;
  flex-grow: 1;

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: stretch;

  .App-body {
    width: 100%;
    height: 100dvh;
    overflow-y: auto;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .App-router-view {
      width: 100%;
      height: max-content;

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
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
</style>
