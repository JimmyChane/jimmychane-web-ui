<script setup lang="ts">
import { computed } from 'vue';

import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { useNavigationStore } from '@/stores/navigation.store';
import { useAppStore } from '@/stores/store';

import AppThemeToggler from '@/app/theme-toggler/App-ThemeToggler.vue';

import NavigationDrawerController from '../NavigationDrawerController.vue';
import AppNavigationDrawerItem from './AppNavigationDrawer-Item.vue';

const appStore = useAppStore();
const navigationStore = useNavigationStore();
const navigationDrawerStore = useNavigationDrawerStore();

const viewMode = computed(() => {
  if (!appStore.useNavigationDrawerComponent) return;
  if (navigationDrawerStore.isSnap) return 'snap';
  if (navigationDrawerStore.isDrawer) return 'drawer';
});

const cssViewMode = computed(() => {
  if (navigationDrawerStore.isSnap) return 'snap';
  if (navigationDrawerStore.isDrawer) return 'drawer';
});
</script>

<template>
  <NavigationDrawerController class="navigation-drawer-controller" :data-view-mode="viewMode" style="z-index: 2">
    <div class="navigation-drawer" :data-view-mode="cssViewMode">
      <div class="navigation-drawer-items">
        <AppNavigationDrawerItem v-for="route of navigationStore.navigations" :key="route.id" :item="route" />
      </div>

      <AppThemeToggler />
    </div>
  </NavigationDrawerController>
</template>

<style scoped lang="scss">
.navigation-drawer-controller {
  &[data-view-mode='snap'] {
    --navigation-drawer-width: 12rem;
  }
  &[data-view-mode='drawer'] {
    --navigation-drawer-width: 16rem;
  }
}
.navigation-drawer {
  height: 100%;
  padding: 1rem;
  gap: 1rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  .navigation-drawer-items {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    flex-grow: 1;
  }

  &[data-view-mode='snap'] {
    background-color: var(--background-color-opacity50);
  }
  &[data-view-mode='drawer'] {
    background-color: var(--background-color);
  }
}
</style>
