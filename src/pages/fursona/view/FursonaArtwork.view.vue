<script setup lang="ts">
import { ref } from 'vue';

import AppSectionTitle from '@/components/AppSectionTitle.vue';
import BrushIcon from '@/components/icon/Brush.icon.vue';

import FursonaArkworkThumbnail from '../components/FursonaArkwork-Thumbnail.vue';

const images = ref([
  { src: new URL('@/assets/fursona/color-pallete-w200.webp', import.meta.url).toString(), alt: 'Furusona Colors' },
  { src: new URL('@/assets/fursona/ref-sheet-front-w250.webp', import.meta.url).toString(), alt: 'Front Reference' },
  { src: new URL('@/assets/fursona/ref-sheet-back-w250.webp', import.meta.url).toString(), alt: 'Back Reference' },
]);
</script>

<template>
  <div class="fursona-artwork">
    <AppSectionTitle>
      <template #icon><BrushIcon /></template>
      Artwork & Character Design
    </AppSectionTitle>
    <div class="fursona-artwork-thumbnails">
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
    height: 100%;
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
  }
  & > p {
    font-size: 0.875rem;
    font-weight: 400;
    opacity: 0.8;
  }
}
</style>
