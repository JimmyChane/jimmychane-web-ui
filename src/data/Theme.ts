import type { Component } from 'vue';

import LightThemeIcon from '@/app/actionbar/icon/IconLightTheme.vue';
import DarkThemeIcon from '@/app/actionbar/icon/IconDarkTheme.vue';
import { useLocalStorage } from '@vueuse/core';

const useThemeStorage = () => useLocalStorage('theme', LightTheme.key);

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

export function save(theme: Theme): void {
  const storageTheme = useThemeStorage();
  storageTheme.value = theme.key;
}
export function get(): Theme {
  const theme = useThemeStorage();

  if (theme.value === LightTheme.key) return LightTheme;
  if (theme.value === DarkTheme.key) return DarkTheme;

  return LightTheme;
}
