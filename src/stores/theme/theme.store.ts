import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { type Theme, LightTheme, DarkTheme, save, get } from '@/data/Theme';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(get());

  function setTheme(theme: Theme): void {
    theme.key === LightTheme.key ? setLightTheme() : setDarkTheme();
  }
  function setDarkTheme(): void {
    theme.value = DarkTheme;

    const html = document.querySelector('html');
    if (!html?.classList.contains('dark')) {
      html?.classList.add('dark');
      html?.style.setProperty('color-scheme', 'dark');
    }

    save(DarkTheme);
  }
  function setLightTheme(): void {
    theme.value = LightTheme;

    const html = document.querySelector('html');
    if (html?.classList.contains('dark')) {
      html?.classList.remove('dark');
      html?.style.setProperty('color-scheme', 'light');
    }

    save(LightTheme);
  }
  function toggleThemes(): void {
    theme.value.key === LightTheme.key ? setDarkTheme() : setLightTheme();
  }

  return {
    theme: computed(() => theme.value),
    setTheme,
    setLightTheme,
    setDarkTheme,
    toggleThemes,
  };
});
