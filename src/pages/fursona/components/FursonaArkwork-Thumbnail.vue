<script setup lang="ts">
import { useAspectRatioWidth } from '@chanzor/vue-use';
import { useElementBounding } from '@vueuse/core';
import { useTemplateRef } from 'vue';

import { useImageViewerStore } from '@/stores/image-viewer.store';

defineProps<{ src: string; alt: string }>();

const imageViewerStore = useImageViewerStore();

const selfRef = useTemplateRef('selfRef');
const { height } = useElementBounding(selfRef);
const { width } = useAspectRatioWidth(height, '12:16');
</script>

<template>
  <button
    ref="selfRef"
    class="fursona-artwork-thumbnail"
    :style="{ '--width': `${width}px` }"
    @click="() => imageViewerStore.open(src)"
  >
    <div class="fursona-artwork-bg"></div>
    <img :src :alt loading="lazy" />
  </button>
</template>

<style scoped lang="scss">
.fursona-artwork-thumbnail {
  position: relative;

  max-width: var(--width);
  height: 100%;
  padding: 1em;

  border-radius: 1rem;
  border: none;
  background: none;
  border: 1px solid var(--primary-color-dark-100);
  overflow: hidden;

  .fursona-artwork-bg {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;

    background-color: var(--primary-color-light-100);
    opacity: 0.7;
  }

  & > img {
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    & > img {
      transform: scale(1.05);
    }
  }
  &:focus {
    & > img {
      transform: scale(0.95);
    }
  }
}
</style>
