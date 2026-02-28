<script setup lang="ts">
import { useAspectRatioHeight } from '@chanzor/vue-use';
import { useElementSize } from '@vueuse/core';
import { computed, defineAsyncComponent, useTemplateRef } from 'vue';

import PFP_WEBP from '@/assets/jimmy_fox_pfp-v1.webp';
import { useDialog, useThemeStore } from '@/stores/store';

import type { AppImageViewerData } from '@/app/image-viewer/AppImageViewer.vue';

import HomePfpBackground from './Home-Pfp-Background.vue';

const selfRef = useTemplateRef('selfRef');
const { width } = useElementSize(selfRef);
const { height } = useAspectRatioHeight(width, '16:12');
const heightConstrained = computed(() => Math.min(height.value, 500));

const { open } = useDialog<AppImageViewerData>({
  component: defineAsyncComponent(() => import('@/app/image-viewer/AppImageViewer.vue')),
});

const themeStore = useThemeStore();
const selfTheme = computed(() => {
  switch (themeStore.themeClass) {
    case 'light':
      return 'dark';
    case 'dark':
      return 'light';
  }
});
</script>

<template>
  <button
    ref="selfRef"
    class="home-pfp"
    :class="selfTheme"
    :style="{ '--height': `${heightConstrained}px` }"
    @click="() => open(PFP_WEBP)"
  >
    <HomePfpBackground />
    <img class="home-pfp-image" :src="PFP_WEBP" alt="Jimmy Chane's Profile Image" loading="lazy" />
  </button>
</template>

<style lang="scss" scoped>
.home-pfp {
  font-size: 1rem;

  width: 100%;
  height: var(--height);

  position: relative;
  margin-bottom: 1em;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border-radius: 1em;
  overflow: hidden;

  border: none;
  background: none;

  .home-pfp-image {
    width: inherit;
    height: inherit;
    transform: scale(1.3);

    z-index: 2;
    object-fit: contain;
    user-select: none;
    transition: transform 0.3s;
  }

  &:hover {
    .home-pfp-image {
      transform: scale(1.2);
    }
  }
}
</style>
