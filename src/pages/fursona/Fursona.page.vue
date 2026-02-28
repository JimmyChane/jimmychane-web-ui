<script setup lang="ts">
import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import FursonaArtworkView from './view/FursonaArtwork.view.vue';
import FursonaGalleryView from './view/FursonaGallery.view.vue';
import FursonaIntroView from './view/FursonaIntro.view.vue';
import FursonaOutfitView from './view/FursonaOutfit.view.vue';
import FursonaPersonalityView from './view/FursonaPersonality.view.vue';
import FursonaTraitView from './view/FursonaTrait.view.vue';
</script>

<template>
  <AppPage>
    <div class="fursona-page">
      <div class="fursona-page-header">
        <FursonaIntroView />
        <FursonaTraitView />
      </div>
      <div class="fursona-page-wrap">
        <FursonaArtworkView />
        <FursonaPersonalityView />
      </div>
      <FursonaOutfitView />
      <FursonaGalleryView />
    </div>
  </AppPage>
</template>

<style scoped lang="scss">
.light {
  .fursona-page {
    --section-fursona-text-color: rgb(2, 32, 28);
    --section-fursona-header-background-color: rgb(180, 231, 224);
    --section-fursona-background-color: #5ba097;
  }
}
.dark {
  .fursona-page {
    --section-fursona-text-color: var(--text-color);
    --section-fursona-header-background-color: rgb(56, 80, 77);
    --section-fursona-background-color: rgb(41, 58, 56);
  }
}
.fursona-page {
  width: 100%;
  gap: 4rem;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;

  .fursona-page-header {
    width: 100%;
    gap: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .fursona-page-wrap {
    width: 100%;
    gap: 4rem 2rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      flex-grow: 1;
      flex-basis: 20rem;

      &:nth-child(1) {
        flex-basis: 32rem;
      }
    }
  }
}
</style>
