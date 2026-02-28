<script setup lang="ts">
import { PROFILE_JIMMYCHANE } from '@/config/jimmychane.profile.meta';
import { useImageViewerStore } from '@/stores/image-viewer.store';

import AppLabel from '@/components/AppLabel.vue';

const imageViewerStore = useImageViewerStore();
</script>

<template>
  <div class="fursona-intro">
    <div class="fursona-intro-content">
      <h1>Meet Jimmy</h1>
      <p>
        A vibrant canine character embodying creativity and digital craftsmanship. Jimmy serves as the digital avatar
        for the design journey.
      </p>
      <div class="fursona-intro-labels">
        <AppLabel align="vertical">
          <template #title>Species</template>
          Canine / Fox
        </AppLabel>
        <AppLabel align="vertical">
          <template #title>Aesthetic</template>
          Warm & Earthy
        </AppLabel>
      </div>
    </div>
    <div class="fursona-intro-thumbnail">
      <button @click="() => imageViewerStore.open(PROFILE_JIMMYCHANE.fursona.image)">
        <img :src="PROFILE_JIMMYCHANE.fursona.image" :alt="PROFILE_JIMMYCHANE.fursona.alt" loading="lazy" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fursona-intro {
  width: 100%;

  background-color: var(--primary-color-light-100);
  border: 1px solid var(--primary-color-dark-100);
  border-radius: 2rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;

  & > * {
    flex-grow: 1;
    flex-basis: 20rem;
  }

  .fursona-intro-content {
    width: 100%;
    padding: 2rem;
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    .fursona-intro-labels {
      font-size: 0.7rem;
      font-weight: 700;
      margin-top: 1.5rem;
      gap: 0.3em;
      flex-grow: 1;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
  .fursona-intro-thumbnail {
    width: 100%;
    flex-grow: 1;
    background-color: var(--primary-color-200);

    & > button {
      width: 100%;

      aspect-ratio: 16/9;
      border-radius: 1.5rem;
      margin: auto;
      border: none;
      background: none;

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
}
</style>
