import type { Component } from 'vue';
import IconHome from '@/app/actionbar/icon/IconHome.vue';
import IconFox from '@/app/actionbar/icon/IconFox.vue';

export interface Route {
  key: string;
  path: string;
  title: string;
  icon?: Component;
}

export const HomeRoute = { key: 'home', path: '/', title: 'Home', icon: IconHome };
export const FursonaRoute = { key: 'fursona', path: '/fursona', title: 'Fursona', icon: IconFox };
export const ProjectRoute = { key: 'project', path: '/project', title: 'Project' };
