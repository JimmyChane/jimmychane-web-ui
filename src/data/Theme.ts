import type { Component } from 'vue';
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
