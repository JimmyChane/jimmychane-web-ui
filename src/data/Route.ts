import type { Component } from 'vue';
import HomeIcon from '@/components/icon/Home.icon.vue';
import FoxIcon from '@/components/icon/Fox.icon.vue';

export interface Route {
  key: string;
  path: string;
  title: string;
  icon?: Component;
}

export const HomeRoute = { key: 'home', path: '/', title: 'Home', icon: HomeIcon };
export const FursonaRoute = { key: 'fursona', path: '/fursona', title: 'Fursona', icon: FoxIcon };
export const ProjectRoute = { key: 'project', path: '/project', title: 'Project' };
