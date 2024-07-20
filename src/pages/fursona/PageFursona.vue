<script setup lang="ts">
  import AppPage from '@/app/page/AppPage.vue';
  import Section from './components/PageFursona-section.vue';
  import FursonaHeader from './components/PageFursona-header.vue';
  import { JimmyChane } from '@/data/Profile';
</script>

<template>
  <AppPage>
    <Section class="PageFursona" style="--text-color: var(--section-fursona-text-color)">
      <img
        class="PageFursona-fursona-preview"
        :src="JimmyChane.fursona.image"
        :alt="JimmyChane.fursona.alt"
        loading="lazy"
      />

      <template v-for="section of JimmyChane.fursona.sections">
        <FursonaHeader
          class="PageFursona-fursona-title"
          :title="section.titles.title"
          :subtitle="section.titles.subtitle"
        />
        <p>{{ section.description }}</p>
      </template>
    </Section>
  </AppPage>
</template>

<style scoped lang="scss">
  .PageFursona {
    --section-color: var(--section-fursona-background-color);
    color: white;

    display: flex;
    flex-direction: column;
    text-align: start;

    .PageFursona-fursona-preview {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: contain;
      margin: auto;
      border-radius: 2em;

      background: var(--section-fursona-header-background-color);

      @media (min-width: 800px) {
        padding: 1rem;
      }
      @media (min-width: 1000px) {
        padding: 2rem;
      }
    }
    .PageFursona-fursona-title {
      margin-top: 4em;
      margin-bottom: 2em;
    }
  }
</style>
