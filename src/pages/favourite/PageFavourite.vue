<script setup lang="ts">
  import Page from '@/components/AppPage.vue';
  import PageFavouriteSection from './components/PageFavourite-section.vue';
</script>

<template>
  <Page>
    <div class="page-favourite">
      <PageFavouriteSection title="Foods">
        <span>Fried Rice</span>
        <span>Spaghetti</span>
        <span>Pizza</span>
        <span>Ramen</span>
      </PageFavouriteSection>

      <PageFavouriteSection title="Games">
        <span>Minecraft</span>
        <span>Factorio</span>
      </PageFavouriteSection>
    </div>
  </Page>
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
