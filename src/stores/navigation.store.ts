import { defineStore } from 'pinia';
import { type Component, computed, markRaw, ref } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';

import FoxIcon from '@/components/icon/Fox.icon.vue';
import HomeIcon from '@/components/icon/Home.icon.vue';

export enum LayoutId {
  FULL,
  NAVIGATION,
}

export interface AppRouteOption {
  readonly id: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: Component;
  readonly layoutId?: LayoutId;

  readonly page: () => Component;
}
export class AppRoute {
  readonly id: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: Component;
  readonly layoutId?: LayoutId;

  readonly page: () => Component;

  constructor(option: AppRouteOption) {
    this.id = option.id;
    this.path = option.path;
    this.title = option.title;
    this.icon = option.icon;
    this.layoutId = option.layoutId;

    this.page = option.page;
  }

  toVueRoute(): RouteRecordRaw {
    return { name: this.id, path: this.path, component: this.page };
  }
}

export const HOME_ROUTE = new AppRoute({
  id: 'home',
  path: '/',
  title: 'Home',
  icon: markRaw(HomeIcon),
  page: () => import('@/pages/home/Home.page.vue'),
});
export const FURSONA_ROUTE = new AppRoute({
  id: 'fursona',
  path: '/fursona',
  title: 'Fursona',
  icon: markRaw(FoxIcon),
  page: () => import('@/pages/fursona/Fursona.page.vue'),
});
export const FAVOURITE_ROUTE = new AppRoute({
  id: 'favourite',
  path: '/favourite',
  title: 'Favourite',
  page: () => import('@/pages/favourite/Favourite.page.vue'),
});
export const PROJECT_ROUTE = new AppRoute({
  id: 'project',
  path: '/project',
  title: 'Project',
  page: () => import('@/pages/project/Project.page.vue'),
});
export const VALENTINE_ROUTE = new AppRoute({
  id: 'valentine',
  path: '/valentine',
  title: 'Valentine',
  layoutId: LayoutId.FULL,
  page: () => import('@/pages/valentine/Valentine.page.vue'),
});

export const useNavigationStore = defineStore('navigation', () => {
  const route = useRoute();

  const navigations = ref([
    HOME_ROUTE,
    FURSONA_ROUTE,
    PROJECT_ROUTE,
    FAVOURITE_ROUTE,
  ]);

  const currentNavigation = computed(() => {
    return navigations.value.find(
      (navigationRoute) => navigationRoute.id === route.name,
    );
  });
  const nextNavigation = computed(() => {
    const currentRouteName = route.name;
    const currentNavigation = navigations.value.find((navigation) => {
      return navigation.id === currentRouteName;
    });

    if (!currentNavigation) return;

    const currentNavigationIndex = navigations.value.indexOf(currentNavigation);
    const nextNavigationIndex = currentNavigationIndex + 1;

    if (nextNavigationIndex >= navigations.value.length) return;

    return navigations.value[nextNavigationIndex];
  });

  return {
    navigations: computed(() => navigations.value),
    currentNavigation,
    nextNavigation,
  };
});

export function findAppRouteById(id?: string): AppRoute | undefined {
  if (id === undefined) return;

  return [
    HOME_ROUTE,
    FURSONA_ROUTE,
    FAVOURITE_ROUTE,
    PROJECT_ROUTE,
    VALENTINE_ROUTE,
  ].find((route) => route.id === id);
}
