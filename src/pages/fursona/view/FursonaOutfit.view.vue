<script setup lang="ts">
import { ref } from 'vue';

import AppSectionTitle from '@/components/AppSectionTitle.vue';

import FursonaDot from '../components/Fursona-Dot.vue';
import FursonaVariationThumbnail from '../components/FursonaVariation-Thumbnail.vue';

const images = ref([
  { src: new URL('@/assets/fursona/outfit-naked-w250.webp', import.meta.url).toString(), alt: 'Naked Outfit' },
  { src: new URL('@/assets/fursona/outfit-casual-w250.webp', import.meta.url).toString(), alt: 'Causal Outfit' },
  { src: new URL('@/assets/fursona/outfit-swim-w250.webp', import.meta.url).toString(), alt: 'Swim Outfit' },
  { src: new URL('@/assets/fursona/outfit-work-w250.webp', import.meta.url).toString(), alt: 'Work Outfit' },
]);
</script>

<template>
  <div class="fursona-outfit">
    <AppSectionTitle>
      <template #icon><FursonaDot /></template>
      Character Outfits
    </AppSectionTitle>
    <div class="fursona-artwork-thumbnails">
      <FursonaVariationThumbnail v-for="image in images" :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fursona-outfit {
  width: 100%;
  gap: 0.8rem;

  display: flex;
  flex-direction: column;

  .fursona-artwork-thumbnails {
    width: 100%;
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      flex-shrink: 1;
      flex-grow: 1;
      flex-basis: 10rem;
      height: 10rem;
    }
  }
}
</style>
