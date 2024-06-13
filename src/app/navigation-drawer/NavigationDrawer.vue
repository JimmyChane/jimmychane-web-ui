<script setup lang="ts">
  import NavigationDrawerController from '@/stores/navigation-drawer/components/NavigationDrawerController.vue';
  import NavigationDrawerItem from './NavigationDrawer-Item.vue';
  import { useNavigationStore } from '@/stores/navigation/navigation.store';
  import { useNavigationDrawerStore } from '@/stores/navigation-drawer/navigation-drawer.store';
  import { computed } from 'vue';
  import ThemeToggler from '../actionbar/App-Actionbar-ThemeToggler.vue';

  const navigationStore = useNavigationStore();
  const navigationDrawerStore = useNavigationDrawerStore();

  const cssViewMode = computed(() => {
    if (navigationDrawerStore.isSnap) return 'snap';
    if (navigationDrawerStore.isDrawer) return 'drawer';
  });
</script>

<template>
  <NavigationDrawerController>
    <div class="navigation-drawer" :data-view-mode="cssViewMode">
      <div class="navigation-drawer-items">
        <NavigationDrawerItem
          v-for="route of navigationStore.navigations"
          :key="route.key"
          :item="route"
        />
      </div>

      <ThemeToggler />
    </div>
  </NavigationDrawerController>
</template>

<style scoped lang="scss">
  .navigation-drawer {
    height: 100%;
    padding: 1rem;
    gap: 1rem;

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
