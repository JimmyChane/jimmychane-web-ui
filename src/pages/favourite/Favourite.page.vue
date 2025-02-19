<script setup lang="ts">
import FoodIcon from '@/components/icon/Food.icon.vue';
import GameIcon from '@/components/icon/Game.icon.vue';
import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import PageFavouriteSection from './components/PageFavourite-section.vue';
</script>

<template>
  <AppPage>
    <div class="page-favourite">
      <PageFavouriteSection title="Foods" :icon="FoodIcon">
        <span>Fried Rice</span>
        <span>Spaghetti</span>
        <span>Pizza</span>
        <span>Ramen</span>
        <span>Sushi</span>
        <span>Salmon</span>
      </PageFavouriteSection>

      <PageFavouriteSection title="Games" :icon="GameIcon">
        <span>Minecraft</span>
        <span>Factorio</span>
        <span>Unrailed</span>
      </PageFavouriteSection>
    </div>
  </AppPage>
</template>

<style scoped lang="scss">
.page-favourite {
  width: 100%;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
