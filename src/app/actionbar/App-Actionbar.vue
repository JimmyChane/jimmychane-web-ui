<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

import { useNavigationDrawerStore } from '@/app-components/navigation-drawer/navigation-drawer.store';
import { useNavigationStore } from '@/stores/navigation.store';
import { useWindowStore } from '@/stores/store';

import ThemeToggler from './App-Actionbar-ThemeToggler.vue';

const Hamburger = defineAsyncComponent(() => import('./App-Actionbar-Hamburger.vue'));
const Nav = defineAsyncComponent(() => import('./App-Actionbar-Nav.vue'));

defineProps<{ parentScrollTop: number }>();

const navigationStore = useNavigationStore();
const navigationDrawerStore = useNavigationDrawerStore();
const windowStore = useWindowStore();

const isUsingDrawer = computed(() => {
  return navigationDrawerStore.isDrawer && !windowStore.isLargerThanMobile;
});
</script>

<template>
  <div
    class="App-actionbar"
    :data-background="parentScrollTop > 0"
    :data-snap="navigationDrawerStore.isSnap"
    :data-drawer="navigationDrawerStore.isDrawer"
  >
    <div class="App-actionbar-content">
      <div class="App-actionbar-title" v-if="isUsingDrawer">
        <Hamburger />

        <span v-if="navigationStore.currentNavigation">
          {{ navigationStore.currentNavigation.title }}
        </span>
      </div>

      <div v-if="!isUsingDrawer" class="App-actionbar-items">
        <Nav v-for="route of navigationStore.navigations" :key="route.key" :item="route" />
      </div>

      <ThemeToggler />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.App-actionbar {
  position: sticky;
  top: 0;

  width: 100%;
  height: var(--actionbar-height);
  min-height: var(--actionbar-height);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid;
  transition:
    background-color 700ms ease,
    border-color 700ms ease;

  .App-actionbar-content {
    width: 100%;
    max-width: var(--content-max-width);

    gap: 1rem;
    padding-inline: 1rem;
    transition: all 200ms ease;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 700px) {
      padding-inline: 1.5rem;
    }
    @media (min-width: 1200px) {
      padding-inline: 4rem;
    }

    .App-actionbar-title {
      gap: 1rem;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      & > span {
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1rem;
      }
    }
  }

  .App-actionbar-items {
    flex-grow: 1;
    gap: 0.2rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &[data-background='false'] {
    background-color: transparent;
    border-color: transparent;
  }
  &[data-background='true'] {
    background-color: var(--actionbar-background-color-opacity70);
    border-color: hsla(0, 0%, 0%, 0.05);
    border-color: var(--text-color-opacity5);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }
  }
}
</style>
