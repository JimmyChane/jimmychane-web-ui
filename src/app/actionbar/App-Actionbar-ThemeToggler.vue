<script setup lang="ts">
import { computed } from 'vue';
import { DarkTheme, LightTheme, useThemeStore } from '@/stores/theme.store';

const themeStore = useThemeStore();

const indexTheme = computed(() => {
  switch (themeStore.theme.key) {
    case LightTheme.key:
      return 0;
    case DarkTheme.key:
      return 1;
    default:
      return -1;
  }
});
</script>

<template>
  <div class="App-actionbar-theme">
    <div class="App-actionbar-theme-highlight" :style="{ '--item-index': `${indexTheme}` }"></div>
    <button aria-label="Light Theme" @click="() => themeStore.toggleThemes()">
      <component :is="LightTheme.icon" :size="20" />
    </button>
    <button
      style="padding-left: 4%"
      aria-label="Dark Theme"
      @click="() => themeStore.toggleThemes()"
    >
      <component :is="DarkTheme.icon" :size="18" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.App-actionbar-theme {
  display: flex;
  flex-direction: row;
  align-items: center;

  background: rgba(0, 0, 0, 0.05);
  background: var(--text-color-opacity5);
  border: 1px solid var(--text-color-opacity5);
  border-radius: 0.5em;

  position: relative;
  padding: var(--container-padding);
  gap: var(--container-gap);
  font-size: 1rem;

  --item-count: 2;

  --container-gap: 0.2em;
  --container-padding: 0.2em;
  --item-width: calc(
    calc(100% / var(--item-count)) - calc(var(--container-gap) * calc(var(--item-count) - 1))
  );
  --item-height: 3em;
  --item-index: 0;

  & > * {
    flex-grow: 1;

    width: var(--item-width);
    min-width: var(--item-width);
    max-width: var(--item-width);

    height: var(--item-height);
    min-height: var(--item-height);
    max-height: var(--item-height);

    aspect-ratio: 1/1;

    display: grid;
    place-items: center;
  }
  & > button {
    font-size: inherit;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
  }
  .App-actionbar-theme-highlight {
    position: absolute;
    left: calc(var(--container-padding) + calc(var(--item-width) * var(--item-index)));

    transition: all 400ms ease;

    z-index: 1;
    background: var(--background-color-opacity60);
    pointer-events: none;
    border-radius: inherit;
  }
}
</style>
