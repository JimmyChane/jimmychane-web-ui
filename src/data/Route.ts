import { markRaw, type Component } from 'vue';
import HomeIcon from '@/components/icon/Home.icon.vue';
import FoxIcon from '@/components/icon/Fox.icon.vue';

export interface Route {
  key: string;
  path: string;
  title: string;
  icon?: Component;
}

export const HomeRoute: Route = { key: 'home', path: '/', title: 'Home', icon: markRaw(HomeIcon) };
export const FursonaRoute: Route = {
  key: 'fursona',
  path: '/fursona',
  title: 'Fursona',
  icon: markRaw(FoxIcon),
};
export const FavouriteRoute: Route = {
  key: 'favourite',
  path: '/favourite',
  title: 'Favourite',
};
export const ProjectRoute: Route = { key: 'project', path: '/project', title: 'Project' };
