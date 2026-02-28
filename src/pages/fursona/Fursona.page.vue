<script setup lang="ts">
import { PROFILE_JIMMYCHANE } from '@/config/jimmychane.profile.meta';
import { useImageViewerStore } from '@/stores/image-viewer.store';

import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import FursonaHeader from './components/PageFursona-header.vue';
import Section from './components/PageFursona-section.vue';

const imageViewerStore = useImageViewerStore();
</script>

<template>
  <AppPage>
    <Section class="fursona-page" style="--text-color: var(--section-fursona-text-color)">
      <button
        class="PageFursona-fursona-preview"
        @click="() => imageViewerStore.open(PROFILE_JIMMYCHANE.fursona.image)"
      >
        <img :src="PROFILE_JIMMYCHANE.fursona.image" :alt="PROFILE_JIMMYCHANE.fursona.alt" loading="lazy" />
      </button>

      <div style="display: flex; flex-direction: column; gap: 1rem">
        <div v-for="(section, index) of PROFILE_JIMMYCHANE.fursona.sections" :key="index">
          <FursonaHeader :title="section.titles.title" :subtitle="section.titles.subtitle" />
          <p>{{ section.description }}</p>
        </div>
      </div>
    </Section>
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
  --section-color: var(--section-fursona-background-color);
  color: white;

  gap: 1rem;

  display: flex;
  flex-direction: column;
  text-align: start;

  .PageFursona-fursona-preview {
    width: 100%;

    aspect-ratio: 16/9;
    border-radius: 1.5rem;
    margin: auto;
    border: none;

    background: var(--section-fursona-header-background-color);

    & > img {
      width: 100%;
      height: 100%;
      max-height: 25rem;
      object-fit: contain;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      & > img {
        transform: scale(1.05);
      }
    }
    &:focus {
      & > img {
        transform: scale(0.95);
      }
    }

    @media (min-width: 800px) {
      padding: 1rem;
    }
    @media (min-width: 1000px) {
      padding: 2rem;
    }
  }
}
</style>
