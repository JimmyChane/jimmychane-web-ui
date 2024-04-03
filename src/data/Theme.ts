import type { Component } from 'vue';

import LightThemeIcon from '@/app/actionbar/icon/IconLightTheme.vue';
import DarkThemeIcon from '@/app/actionbar/icon/IconDarkTheme.vue';

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
  localStorage.setItem('theme', theme.key);
}
export function get(): Theme {
  const theme = localStorage.getItem('theme');

  if (theme === 'light') return LightTheme;
  if (theme === 'dark') return DarkTheme;

  return LightTheme;
}
