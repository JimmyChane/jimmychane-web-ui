<script setup lang="ts">
import AppPage from '@/app/page/AppPage.vue';
import PageFavouriteSection from './components/PageFavourite-section.vue';
import FoodIcon from '@/components/icon/Food.icon.vue';
import GameIcon from '@/components/icon/Game.icon.vue';
</script>

<template>
  <AppPage>
    <div class="page-favourite">
      <PageFavouriteSection title="Foods" :icon="FoodIcon">
        <span>Fried Rice</span>
        <span>Spaghetti</span>
        <span>Pizza</span>
        <span>Ramen</span>
      </PageFavouriteSection>

      <PageFavouriteSection title="Games" :icon="GameIcon">
        <span>Minecraft</span>
        <span>Factorio</span>
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
