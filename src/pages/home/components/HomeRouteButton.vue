<script setup lang="ts">
import { useAspectRatioHeight } from '@chanzor/vue-use';
import { useElementSize } from '@vueuse/core';
import { type ComputedRef, computed, useTemplateRef } from 'vue';

import { AppRoute } from '@/stores/navigation.store';
import { useWindowStore } from '@/stores/store';

defineProps<{ route: AppRoute; type: 'fursona' | 'project' | 'favorite' }>();

const windowStore = useWindowStore();
const aspectRatio = computed(() => {
  if (windowStore.isLargerThanMobile) return '4:3';
  return '4:2';
});

const selfRef = useTemplateRef('selfRef');
const { width } = useElementSize(selfRef as unknown as ComputedRef<HTMLElement>);
const { height } = useAspectRatioHeight(width, aspectRatio);
</script>

<template>
  <RouterLink
    ref="selfRef"
    :style="{ '--desired-height': `${height}px` }"
    class="home-route-button"
    :to="{ name: route.id }"
    :data-type="type"
  >
    <span>{{ route.title }}</span>
    <p>
      <slot name="description"></slot>
    </p>
  </RouterLink>
</template>

<style lang="scss" scoped>
.light {
  .home-route-button {
    --fursona-color: #5ba097;
    --project-color: var(--primary-color-500);
  }
}
.dark {
  .home-route-button {
    --fursona-color: rgb(41, 58, 56);
    --project-color: var(--primary-color-300);
  }
}
.home-route-button {
  height: var(--desired-height);

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 12rem;

  text-decoration: none;
  text-align: start;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: all 200ms ease;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > span {
    font-size: 1.1em;
    font-weight: 600;
  }
  & > p {
    font-size: 0.875em;
    opacity: 0.8;
  }

  &[data-type='fursona'] {
    background-color: var(--fursona-color);
    color: white;
  }
  &[data-type='project'] {
    background-color: var(--project-color);
    color: white;
  }
  &[data-type='favorite'] {
    background-color: var(--background-color-opacity60);
    color: inherit;

    &:hover {
      background-color: var(--background-color-opacity70);
    }
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
