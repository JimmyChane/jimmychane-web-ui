<script setup lang="ts">
import { JimmyChane } from '@/models/Profile.model';
import { useDialogPopup } from '@/stores/dialog-popup.store';

import ImageViewer from '@/app/image-viewer/ImageViewer.vue';
import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import FursonaHeader from './components/PageFursona-header.vue';
import Section from './components/PageFursona-section.vue';

const { open } = useDialogPopup<string>({ component: ImageViewer });
</script>

<template>
  <AppPage>
    <Section class="fursona-page" style="--text-color: var(--section-fursona-text-color)">
      <img
        class="PageFursona-fursona-preview"
        :src="JimmyChane.fursona.image"
        :alt="JimmyChane.fursona.alt"
        loading="lazy"
        @click="() => open(JimmyChane.fursona.image)"
      />

      <template v-for="section of JimmyChane.fursona.sections">
        <FursonaHeader :title="section.titles.title" :subtitle="section.titles.subtitle" />
        <p>{{ section.description }}</p>
      </template>
    </Section>
  </AppPage>
</template>

<style scoped lang="scss">
.fursona-page {
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
    border-radius: 1.5em;

    background: var(--section-fursona-header-background-color);

    @media (min-width: 800px) {
      padding: 1rem;
    }
    @media (min-width: 1000px) {
      padding: 2rem;
    }
  }
}
</style>
