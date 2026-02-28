<script setup lang="ts">
import PFP_WEBP from '@/assets/jimmy_fox_pfp-v1.webp';
import { useImageViewerStore } from '@/stores/image-viewer.store';

const imageViewerStore = useImageViewerStore();
</script>

<template>
  <button class="PFP" @click="() => imageViewerStore.open(PFP_WEBP)">
    <div class="PFP-background"></div>
    <img class="PFP-image" :src="PFP_WEBP" alt="Jimmy Chane's Profile Image" loading="lazy" />
  </button>
</template>

<style lang="scss" scoped>
.PFP {
  font-size: 1rem;

  width: 100%;
  height: 100%;

  max-width: 12em;
  max-height: 15em;

  aspect-ratio: 12/15;

  position: relative;

  margin-bottom: 1em;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;

  border: none;
  background: none;

  .PFP-background {
    background-color: var(--cheese-color-pfp);
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    aspect-ratio: 1/1;

    z-index: 1;

    border-radius: 50%;
    user-select: none;

    transition: background-color 200ms ease;
  }

  .PFP-image {
    z-index: 2;
    width: 120%;
    min-height: 100%;
    object-fit: cover;
    user-select: none;
    transition: transform 0.3s;
  }

  &:hover {
    .PFP-image {
      transform: scale(1.05);
    }
  }
}
</style>
