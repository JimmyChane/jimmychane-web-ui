<script setup lang="ts">
  import NavigationDrawerController from '@/stores/navigation-drawer/NavigationDrawerController.vue';
  import NavigationDrawerItem from './NavigationDrawer-Item.vue';
  import { useNavigationStore } from '@/stores/navigation/navigation.store';

  const navigationStore = useNavigationStore();
</script>

<template>
  <NavigationDrawerController>
    <div class="navigation-drawer">
      <NavigationDrawerItem
        v-for="route of navigationStore.routes"
        :key="route.key"
        :item="route"
      />
    </div>
  </NavigationDrawerController>
</template>

<style scoped lang="scss">
  .navigation-drawer {
    height: 100%;
    padding: 1rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;

    background-color: var(--background-color);
  }
</style>
