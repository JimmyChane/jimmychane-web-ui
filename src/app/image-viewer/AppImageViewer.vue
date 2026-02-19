<script setup lang="ts">
import type { DialogProps } from '@chanzor/vue-dialog';
import { onClickOutside, useElementSize } from '@vueuse/core';
import { type StyleValue, computed, useTemplateRef } from 'vue';

import CloseIcon from '@/components/icon/Close.icon.vue';

export type AppImageViewerData = string;

const props = defineProps<DialogProps<AppImageViewerData>>();

const imageRef = useTemplateRef('imageRef');
const imageBodyRef = useTemplateRef('bodyRef');

const { width } = useElementSize(imageRef);

const imageViewerToolbarStyle = computed<StyleValue>(() => {
  return { '--width': `${width.value}px` };
});

const close = (): void => {
  props.dialogPopup.close();
};

onClickOutside(imageBodyRef, close);
</script>

<template>
  <div class="app-image-viewer">
    <div class="app-image-viewer-toolbar" :style="imageViewerToolbarStyle">
      <button @click="close">
        <CloseIcon :size="24" />
      </button>
    </div>

    <div ref="bodyRef" class="app-image-viewer-body">
      <img ref="imageRef" :src="props.dialogPopup.data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-image-viewer {
  width: max-content;
  height: max-content;
  max-width: 100%;
  max-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .app-image-viewer-toolbar {
    width: var(--width);
    margin-bottom: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    & > button {
      --width: 2.5rem;
      --height: 2.5rem;

      width: var(--width);
      height: var(--height);
      min-width: var(--width);
      min-height: var(--height);
      max-width: var(--width);
      max-height: var(--height);

      border: none;
      border-radius: 50%;
      background: var(--primary-color-300);
      color: var(--text-color);

      display: grid;
      place-items: center;
      line-height: 1;

      & > * {
        font-size: 1rem;
        color: inherit;
      }
    }
  }

  .app-image-viewer-body {
    max-width: 100%;
    max-height: calc(100% - 2.5rem - 0.5rem);
    display: flex;
    border-radius: 1rem;
    background-color: var(--background-color);

    & > img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>
