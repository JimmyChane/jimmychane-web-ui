<script setup lang="ts">
import { useAspectRatioHeight } from '@chanzor/vue-use';
import { waitFrameMs } from '@chanzor/vue-utils';
import { computedAsync, useElementSize } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

import type { ProjectModel } from '@/config/project.meta';
import { useImageViewerStore } from '@/stores/image-viewer.store';

import ProjectCardStatus from './Project-Card-Status.vue';

defineProps<{ model: ProjectModel }>();

const imageContainerRef = useTemplateRef('imageContainerRef');
const { width } = useElementSize(imageContainerRef);
const { height } = useAspectRatioHeight(width, '16:9');

const showImage = ref(false);
const showImageDelayed = computedAsync(async () => {
  if (showImage.value) await waitFrameMs(200);
  return showImage.value;
});

const imageViewerStore = useImageViewerStore();
</script>

<template>
  <div class="project-card">
    <ProjectCardStatus style="z-index: 2" :model="model.status" />

    <div
      ref="imageContainerRef"
      style="z-index: 1"
      class="project-card-thumbnail"
      :style="{ '--height': `${height}px` }"
    >
      <button @click="() => imageViewerStore.open(model.thumbnail)">
        <img
          :data-show="showImageDelayed"
          :src="model.thumbnail"
          :alt="model.thumbnailAlt"
          @load="() => (showImage = true)"
        />
      </button>
    </div>

    <div class="project-card-content" style="z-index: 1">
      <span class="project-card-title">{{ model.title }}</span>
      <p v-if="model.description?.length">{{ model.description }}</p>

      <div class="project-card-labels">
        <span v-for="label in model.techStacks">{{ label }}</span>
      </div>

      <div class="project-card-footer">
        <!-- TODO: add icon-external button -->
        <a :href="model.link" target="_blank">View Project</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  line-height: 1em;
  gap: 0.5rem;

  text-align: start;

  background-color: var(--primary-color-light-100);
  border: 1px solid var(--primary-color-dark-100);

  border-radius: 1.2rem;
  overflow: hidden;

  .project-card-thumbnail {
    min-width: 100%;
    height: var(--height);

    display: flex;
    flex-direction: column;

    & > button {
      width: 100%;
      min-width: 100%;
      height: var(--height);
      border: none;
      overflow: hidden;
      background-color: var(--primary-color-light-200);

      & > img {
        width: 100%;
        min-width: 100%;
        height: var(--height);
        object-fit: cover;
        opacity: 0;
        transition: 200ms ease;
        transition-property: opacity, transform;

        &[data-show='true'] {
          opacity: 1;
        }
      }

      &:hover {
        & > img {
          transform: scale(1.05);
        }
      }
    }
  }

  .project-card-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 1rem;
    flex-grow: 1;

    .project-card-title {
      font-weight: 600;
      font-size: 1.2em;
    }

    & > p {
      font-size: 0.875rem;
      margin-top: 0.4rem;
      opacity: 0.9;
    }

    .project-card-labels {
      font-size: 0.7rem;
      font-weight: 700;
      margin-top: 1.5rem;
      gap: 0.3em;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;

      & > * {
        padding: 0.3em 1.2em;
        border-radius: 2em;
        background-color: var(--primary-color-light-200);
      }
    }

    .project-card-footer {
      width: 100%;
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-end;
      flex-grow: 1;

      & > a {
        font-size: 0.875rem;

        padding: 1em 1.5em;
        border-radius: 2em;
        background-color: var(--primary-color-light-200);
        border: none;
        color: inherit;
        font-weight: 600;

        text-align: center;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
