<script setup lang="ts">
import { useScroll } from '@vueuse/core';
import { useTemplateRef, watch } from 'vue';
import { useRoute } from 'vue-router';

import CheeseHoles from '@/app/background/CheeseHoles.vue';

import FullLayoutActionbar from './components/FullLayout-Actionbar.vue';

const route = useRoute();

const layoutBodyRef = useTemplateRef('layoutBodyRef');

watch(route, () => (y.value = 0));

const { y } = useScroll(layoutBodyRef, { behavior: 'smooth' });
</script>

<template>
  <div class="full-layout">
    <CheeseHoles style="z-index: 0" />

    <div ref="layoutBodyRef" class="full-layout-body" style="z-index: 1">
      <FullLayoutActionbar :parent-scroll-top="y" style="z-index: 2" />

      <div class="full-layout-router-view" style="z-index: 1">
        <RouterView v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.full-layout {
  --actionbar-height: 4.5rem;
  --statusbar-height: 1.5rem;

  position: relative;

  width: 100%;
  height: 100dvh;
  flex-grow: 1;

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: stretch;

  transition: background-color 200ms ease;

  .full-layout-body {
    width: 100%;
    height: 100dvh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .full-layout-router-view {
      width: 100%;

      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
}
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
</style>
