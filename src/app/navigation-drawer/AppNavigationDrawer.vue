<script setup lang="ts">
import { computed } from 'vue';

import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { useNavigationStore } from '@/stores/navigation.store';

import ThemeToggler from '../actionbar/App-Actionbar-ThemeToggler.vue';
import AppNavigationDrawerItem from './AppNavigationDrawer-Item.vue';

const navigationStore = useNavigationStore();
const navigationDrawerStore = useNavigationDrawerStore();

const cssViewMode = computed(() => {
  if (navigationDrawerStore.isSnap) return 'snap';
  if (navigationDrawerStore.isDrawer) return 'drawer';
});
</script>

<template>
  <div class="navigation-drawer" :data-view-mode="cssViewMode">
    <div class="navigation-drawer-items">
      <AppNavigationDrawerItem
        v-for="route of navigationStore.navigations"
        :key="route.id"
        :item="route"
      />
    </div>

    <ThemeToggler />
  </div>
</template>

<style scoped lang="scss">
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
