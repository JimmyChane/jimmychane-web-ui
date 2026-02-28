<script setup lang="ts">
import { useAspectRatioHeight } from '@chanzor/vue-use';
import { useElementSize } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

import AppSectionTitle from '@/components/AppSectionTitle.vue';
import BrushIcon from '@/components/icon/Brush.icon.vue';

import FursonaArkworkThumbnail from '../components/FursonaArkwork-Thumbnail.vue';

const images = ref([
  { src: new URL('@/assets/fursona/color-pallete-w200.webp', import.meta.url).toString(), alt: 'Furusona Colors' },
  { src: new URL('@/assets/fursona/ref-sheet-front-w250.webp', import.meta.url).toString(), alt: 'Front Reference' },
  { src: new URL('@/assets/fursona/ref-sheet-back-w250.webp', import.meta.url).toString(), alt: 'Back Reference' },
]);

const thumbnailsRef = useTemplateRef('thumbnailsRef');
const { width } = useElementSize(thumbnailsRef);
const { height } = useAspectRatioHeight(width, '16:8', { throttle: 0 });
</script>

<template>
  <div class="fursona-artwork">
    <AppSectionTitle>
      <template #icon><BrushIcon /></template>
      Artwork & Character Design
    </AppSectionTitle>
    <div ref="thumbnailsRef" class="fursona-artwork-thumbnails" :style="{ '--height': `${height}px` }">
      <FursonaArkworkThumbnail v-for="image in images" :src="image.src" :alt="image.alt" />
    </div>
    <p>
      The design focuses on a blend of natural canine anatomy with modern streetwear elements. The color palette is
      heavily inspired by autumn forests and desert dunes, utilizing warm oranges and deep creams.
    </p>
  </div>
</template>

<style scoped lang="scss">
.fursona-artwork {
  width: 100%;
  gap: 0.8rem;

  display: flex;
  flex-direction: column;

  .fursona-artwork-thumbnails {
    width: 100%;
    height: var(--height);
    min-height: var(--height);
    max-height: var(--height);
    gap: 0.5rem;

    display: flex;
    flex-direction: row;

    & > * {
      flex-shrink: 1;
      flex-grow: 1;
    }
  }
  & > p {
    font-size: 0.875rem;
    font-weight: 400;
    opacity: 0.8;
  }
}
</style>
