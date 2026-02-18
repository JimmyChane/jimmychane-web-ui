<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import { PROFILE_JIMMYCHANE } from '@/config/jimmychane.profile.meta';
import { useDialog } from '@/stores/store';

import type { AppImageViewerData } from '@/app/image-viewer/AppImageViewer.vue';
import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import FursonaHeader from './components/PageFursona-header.vue';
import Section from './components/PageFursona-section.vue';

const { open } = useDialog<AppImageViewerData>({
  component: defineAsyncComponent(() => import('@/app/image-viewer/AppImageViewer.vue')),
});
</script>

<template>
  <AppPage>
    <Section class="fursona-page" style="--text-color: var(--section-fursona-text-color)">
      <button class="PageFursona-fursona-preview" @click="() => open(PROFILE_JIMMYCHANE.fursona.image)">
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
