<script setup lang="ts">
import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';

import HamburgerIcon from '@/components/icon/Hamburger.icon.vue';
</script>

<template>
  <button
    class="App-actionbar-hamburger"
    aria-label="Hamburger"
    @click="() => useNavigationDrawerStore().toggle()"
  >
    <HamburgerIcon :size="24" />
  </button>
</template>

<style lang="scss" scoped>
.App-actionbar-hamburger {
  aspect-ratio: 1/1;

  display: grid;
  place-items: center;

  --size: 2.5rem;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  border: none;
  background: none;

  & > * {
    --color: var(--color-active);
  }
}
</style>
