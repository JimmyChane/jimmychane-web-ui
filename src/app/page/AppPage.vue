<script setup lang="ts">
import { computed } from 'vue';

import { useNavigationDrawerStore } from '@/app-components/navigation-drawer/navigation-drawer.store';

const navigationDrawerStore = useNavigationDrawerStore();

const cssViewMode = computed(() => {
  if (navigationDrawerStore.isSnap) return 'snap';
  if (navigationDrawerStore.isDrawer) return 'drawer';
});
</script>

<template>
  <div class="App-page" :data-view-mode="cssViewMode">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.App-page {
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-width: var(--content-max-width);

  transition:
    all 200ms ease-in-out,
    width 200ms ease,
    height 200ms ease;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: var(--App-page-padding);

  --App-page-padding: 1rem;
  @media (min-width: 700px) {
    --App-page-padding: 1.5rem;
  }
  @media (min-width: 1400px) {
    --App-page-padding: 4rem;
  }

  &[data-view-mode='drawer'] {
    padding-top: 0;
  }
}
</style>
