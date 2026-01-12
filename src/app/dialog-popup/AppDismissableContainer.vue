<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const props = defineProps<{ clickClose?: () => void }>();

if (props.clickClose) {
  const bodyRef = useTemplateRef('bodyRef');
  onClickOutside(bodyRef, () => props.clickClose?.());
}
</script>

<template>
  <div class="dismissable-container">
    <div ref="bodyRef" class="dismissable-container-body">
      <slot></slot>
    </div>

    <div style="grid-area: top" :style="{ 'min-height': 'var(--default-size-top)' }"></div>
    <div style="grid-area: left" :style="{ 'min-width': 'var(--default-size-left)' }"></div>
    <div style="grid-area: right" :style="{ 'min-width': 'var(--default-size-right)' }"></div>
    <div style="grid-area: bottom" :style="{ 'min-height': 'var(--default-size-bottom)' }"></div>
  </div>
</template>

<style lang="scss" scoped>
.dismissable-container {
  width: 100dvw;
  height: 100lvh;
  z-index: 1;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-areas:
    'top top top'
    'left body right'
    'bottom bottom bottom';
  grid-template-columns: 1fr minmax(100px, max-content) 1fr;
  grid-template-rows: 1fr minmax(100px, max-content) 4fr;

  --default-size-top: 3rem;
  --default-size-right: 3rem;
  --default-size-bottom: 3rem;
  --default-size-left: 3rem;

  & > * {
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .dismissable-container-body {
    grid-area: body;
    z-index: 2;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
