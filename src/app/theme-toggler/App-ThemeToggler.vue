<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core';
import { type CSSProperties, computed, onMounted, ref, useTemplateRef, watch } from 'vue';

import { useThemeStore } from '@/stores/store';

import DarkThemeIcon from '@/components/icon/DarkTheme.icon.vue';
import LightThemeIcon from '@/components/icon/LightTheme.icon.vue';

const themeStore = useThemeStore();

const indexTheme = computed(() => {
  if (themeStore.themeMode === 'auto') return 0;
  if (themeStore.themeMode === 'light') return 1;
  if (themeStore.themeMode === 'dark') return 2;
  return -1;
});

const selfRef = useTemplateRef('selfRef');
const autoRef = useTemplateRef('autoRef');
const lightRef = useTemplateRef('lightRef');
const darkRef = useTemplateRef('darkRef');

const hoverStyle = ref<CSSProperties>({ opacity: 0 });
const setHoverStyle = useThrottleFn((rect: DOMRect | undefined): void => {
  if (!rect) {
    unsetHoverStyle();
    return;
  }

  const selfRect = selfRef.value?.getBoundingClientRect();
  if (!selfRect) {
    unsetHoverStyle();
    return;
  }

  hoverStyle.value = {
    opacity: 1,
    left: `${rect.left - selfRect.left}px`,
    top: `${rect.top - selfRect.top - 1}px`,
    '--width': `${rect.width}px`,
    '--height': `${rect.height}px`,
  };
}, 100);

const unsetHoverStyle = (): void => {
  hoverStyle.value = { opacity: 0 };
};

const invalidateHover = (): void => {
  if (indexTheme.value === 0) {
    setHoverStyle(autoRef.value?.getBoundingClientRect());
  } else if (indexTheme.value === 1) {
    setHoverStyle(lightRef.value?.getBoundingClientRect());
  } else if (indexTheme.value === 2) {
    setHoverStyle(darkRef.value?.getBoundingClientRect());
  } else {
    unsetHoverStyle();
  }
};

watch([selfRef, autoRef, lightRef, darkRef, , indexTheme], () => invalidateHover());

onMounted(() => invalidateHover());
</script>

<template>
  <div ref="selfRef" class="app-actionbar-theme">
    <div class="app-actionbar-theme-highlight" :style="hoverStyle"></div>
    <button ref="autoRef" aria-label="Auto Theme" @click="() => themeStore.setMode('auto')">A</button>
    <button ref="lightRef" aria-label="Light Theme" @click="() => themeStore.toggleLightDark('light')">
      <LightThemeIcon />
    </button>
    <button ref="darkRef" aria-label="Dark Theme" @click="() => themeStore.toggleLightDark('dark')">
      <DarkThemeIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
.app-actionbar-theme {
  min-width: 8rem;
  height: 3em;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: rgba(0, 0, 0, 0.05);
  background: var(--text-color-opacity5);
  border: 1px solid var(--text-color-opacity5);
  border-radius: 0.5em;

  position: relative;
  padding: 0.2em;
  gap: 0.2em;
  font-size: 1rem;

  .app-actionbar-theme-highlight {
    width: var(--width);
    min-width: var(--width);
    max-width: var(--width);
    height: var(--height);
    min-height: var(--height);
    max-height: var(--height);

    position: absolute;

    transition: all 400ms ease;

    z-index: 1;
    background: var(--background-color-opacity60);
    border-radius: inherit;

    display: flex;

    pointer-events: none;
    user-select: none;
  }
  & > button {
    height: 100%;
    min-height: 100%;
    max-height: 100%;

    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;

    font-size: inherit;
    line-height: 0em;

    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
    color: var(--primary-text-color);

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
