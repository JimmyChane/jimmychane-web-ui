<script setup lang="ts">
import { useImageViewerStore } from '@/stores/image-viewer.store';

const { padding = true, scale = 'scale-down' } = defineProps<{
  src: string;
  alt?: string;
  padding?: boolean;
  scale?: 'scale-down' | 'cover';
}>();

const imageViewerStore = useImageViewerStore();
</script>

<template>
  <button
    class="fursona-variation-thumbnail"
    :style="{ padding: padding ? '2em' : 'unset', '--object-fit': scale }"
    @click="() => imageViewerStore.open(src)"
  >
    <div class="fursona-artwork-bg"></div>
    <img :src :alt loading="lazy" />
  </button>
</template>

<style scoped lang="scss">
.fursona-variation-thumbnail {
  position: relative;

  min-width: max-content;
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
    object-fit: var(--object-fit);
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
