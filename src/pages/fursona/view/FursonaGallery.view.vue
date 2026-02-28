<script setup lang="ts">
import { ref } from 'vue';

import AppSectionTitle from '@/components/AppSectionTitle.vue';

import FursonaDot from '../components/Fursona-Dot.vue';
import FursonaVariationThumbnail from '../components/FursonaVariation-Thumbnail.vue';

const images = ref([
  { src: new URL('@/assets/fursona/gallery/1580733053875-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148213835-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148300619-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148663248-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148709063-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148758154-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148780112-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1585148783298-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1593546414275-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1594572666987-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1595866035647-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1595868102891-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1595869692028-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1596038170845-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1597337670804-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1597416027239-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1597417445419-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1599208927208-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1599234324118-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1601648864099-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1606320923883-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1622303349656-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1622309214272-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/1623412182593-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/IMG_20200115_110503-h200.webp', import.meta.url).toString() },
  { src: new URL('@/assets/fursona/gallery/jim-h200.webp', import.meta.url).toString() },
]);
</script>

<template>
  <div class="fursona-outfit">
    <AppSectionTitle>
      <template #icon><FursonaDot /></template>
      Character Gallery
    </AppSectionTitle>
    <div class="fursona-artwork-thumbnails">
      <FursonaVariationThumbnail v-for="image in images" :src="image.src" :padding="false" scale="cover" />
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
      height: 10rem;
    }
  }
}
</style>
