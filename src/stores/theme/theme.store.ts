import { defineStore } from 'pinia';
import { computed, watch, type Component } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import LightThemeIcon from '@/components/icon/LightTheme.icon.vue';
import DarkThemeIcon from '@/components/icon/DarkTheme.icon.vue';

export interface Theme {
  key: string;
  icon: Component;
}

export const LightTheme: Theme = {
  key: 'light',
  icon: LightThemeIcon,
};
export const DarkTheme: Theme = {
  key: 'dark',
  icon: DarkThemeIcon,
};

export const useThemeStore = defineStore('theme', () => {
  const themeKey = useLocalStorage('theme', LightTheme.key, { writeDefaults: false });
  const theme = computed(() => {
    switch (themeKey.value) {
      case DarkTheme.key:
        return DarkTheme;
      case LightTheme.key:
      default:
        return LightTheme;
    }
  });

  function setTheme(theme: Theme): void {
    theme.key === LightTheme.key ? setLightTheme() : setDarkTheme();
  }
  function setDarkTheme(): void {
    themeKey.value = DarkTheme.key;
  }
  function setLightTheme(): void {
    themeKey.value = LightTheme.key;
  }
  function toggleTheme(): void {
    theme.value.key === LightTheme.key ? setDarkTheme() : setLightTheme();
  }

  function onThemeStorageChange() {
    const html = document.querySelector('html');
    const isDark = html?.classList.contains('dark');

    switch (themeKey.value) {
      case LightTheme.key:
        if (isDark) {
          html?.classList.remove('dark');
          html?.style.setProperty('color-scheme', 'light');
        }
        break;
      case DarkTheme.key:
        if (!isDark) {
          html?.classList.add('dark');
          html?.style.setProperty('color-scheme', 'dark');
        }
        break;
    }
  }

  watch(() => themeKey.value, onThemeStorageChange);
  onThemeStorageChange();

  return {
    theme,
    setTheme,
    setLightTheme,
    setDarkTheme,
    toggleThemes: toggleTheme,
  };
});
