<script setup lang="ts">
import { useLoadingAnimate } from '@chanzor/vue-use';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { opacity, percentageOutput, animateStart, animateEnd } = useLoadingAnimate();

const isRouteBeforeOnce = ref(false);
const isRouteWatchOnce = ref(false);

// TODO: fix, potential route each back and forward
router.beforeEach((_to, _from, next) => {
  if (!isRouteBeforeOnce.value) {
    isRouteBeforeOnce.value = true;
  } else {
    animateStart();
  }

  next();
});
router.afterEach(() => {
  if (!isRouteWatchOnce.value) {
    isRouteWatchOnce.value = true;
  } else {
    animateEnd();
  }
});
</script>

<template>
  <div class="app-route-load" style="z-index: 99">
    <span :style="{ '--percentage': percentageOutput, opacity: opacity }"></span>
  </div>
</template>

<style lang="scss" scoped>
.app-route-load {
  --height: 4px;

  min-width: 100%;
  min-height: var(--height);
  position: fixed;
  top: 0;

  pointer-events: none;
  user-select: none;

  & > span {
    width: calc(100% * var(--percentage));
    min-height: var(--height);

    background-color: var(--primary-text-color);

    transition: opacity 200ms ease;
  }
}
</style>
