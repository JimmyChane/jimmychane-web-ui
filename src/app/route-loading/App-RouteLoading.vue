<script setup lang="ts">
import { waitMs } from '@chanzor/utils';
import { waitFrame } from '@chanzor/vue-utils';
import {
  type CubicBezierPoints,
  type EasingFunction,
  TransitionPresets,
  computedAsync,
  useTransition,
} from '@vueuse/core';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let updateTime = 0;

const duration = ref(0);
const transition = ref<CubicBezierPoints | EasingFunction>(TransitionPresets.easeInOutCubic);
const percentageSource = ref(0);
const percentageOutput = useTransition(percentageSource, { duration, transition });

const opacity = computedAsync(async () => {
  if (percentageSource.value === 1) {
    await waitMs(duration.value + opacityDelay.value);
    return 0;
  }

  return 1;
}, 0);
const opacityDelay = ref(500);

const isRouteBeforeOnce = ref(false);
const isRouteWatchOnce = ref(false);

const animateStartRoute = async () => {
  const now = (updateTime = Date.now());

  await waitFrame();
  if (now !== updateTime) return;

  if (percentageOutput.value < 1) {
    duration.value = 300;
    percentageSource.value = 0;

    await waitMs(duration.value);
    if (now !== updateTime) return;
  } else {
    duration.value = 0;
    percentageSource.value = 0;
  }

  await waitFrame();
  if (now !== updateTime) return;

  transition.value = TransitionPresets.easeOutCubic;
  duration.value = 3000;
  percentageSource.value = 0.8;
};
const animateEndRoute = async () => {
  const now = (updateTime = Date.now());

  await waitFrame();
  if (now !== updateTime) return;

  transition.value = TransitionPresets.easeInOutCubic;
  duration.value = 700;
  percentageSource.value = 1;
};

router.beforeEach((_to, _from, next) => {
  if (!isRouteBeforeOnce.value) {
    isRouteBeforeOnce.value = true;
  } else {
    animateStartRoute();
  }

  next();
});
router.afterEach(() => {
  if (!isRouteWatchOnce.value) {
    isRouteWatchOnce.value = true;
  } else {
    animateEndRoute();
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

    background-color: var(--color-active);

    transition: opacity 200ms ease;
  }
}
</style>
