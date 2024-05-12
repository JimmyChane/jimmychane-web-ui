import { defineStore } from 'pinia';
import { computed, watch } from 'vue';
import { type Theme, LightTheme, DarkTheme } from '@/data/Theme';
import { tryOnMounted, useLocalStorage } from '@vueuse/core';

export const useThemeStore = defineStore('theme', () => {
  const themeStorage = useLocalStorage('theme', LightTheme.key, { writeDefaults: false });

  const theme = computed(() => {
    if (themeStorage.value === LightTheme.key) return LightTheme;
    if (themeStorage.value === DarkTheme.key) return DarkTheme;

    return LightTheme;
  });

  function setTheme(theme: Theme): void {
    theme.key === LightTheme.key ? setLightTheme() : setDarkTheme();
  }
  function setDarkTheme(): void {
    themeStorage.value = DarkTheme.key;
  }
  function setLightTheme(): void {
    themeStorage.value = LightTheme.key;
  }
  function toggleThemes(): void {
    theme.value.key === LightTheme.key ? setDarkTheme() : setLightTheme();
  }

  function onThemeStorageChange() {
    if (themeStorage.value === LightTheme.key) {
      const html = document.querySelector('html');
      if (html?.classList.contains('dark')) {
        html?.classList.remove('dark');
        html?.style.setProperty('color-scheme', 'light');
      }
      return;
    }

    if (themeStorage.value === DarkTheme.key) {
      const html = document.querySelector('html');
      if (!html?.classList.contains('dark')) {
        html?.classList.add('dark');
        html?.style.setProperty('color-scheme', 'dark');
      }
      return;
    }
  }

  tryOnMounted(() => {
    watch(() => themeStorage.value, onThemeStorageChange);
    onThemeStorageChange();
  });

  return {
    theme,
    setTheme,
    setLightTheme,
    setDarkTheme,
    toggleThemes,
  };
});
