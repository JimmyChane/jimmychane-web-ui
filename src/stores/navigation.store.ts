import { defineStore } from 'pinia';
import { type Component, computed, markRaw, ref } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';

import FoxIcon from '@/components/icon/Fox.icon.vue';
import HomeIcon from '@/components/icon/Home.icon.vue';

export interface AppRouteOption {
  readonly key: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: Component;
  readonly page: () => Component;
}
export class AppRoute {
  readonly key: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: Component;

  private readonly page: () => Component;

  constructor(option: AppRouteOption) {
    this.key = option.key;
    this.path = option.path;
    this.title = option.title;
    this.icon = option.icon;
    this.page = option.page;
  }

  toVueRoute(): RouteRecordRaw {
    return {
      name: this.key,
      path: this.path,
      component: this.page,
    };
  }
}

export const HomeRoute = new AppRoute({
  key: 'home',
  path: '/',
  title: 'Home',
  icon: markRaw(HomeIcon),
  page: () => import('@/pages/home/Home.page.vue'),
});
export const FursonaRoute = new AppRoute({
  key: 'fursona',
  path: '/fursona',
  title: 'Fursona',
  icon: markRaw(FoxIcon),
  page: () => import('@/pages/fursona/Fursona.page.vue'),
});
export const FavouriteRoute = new AppRoute({
  key: 'favourite',
  path: '/favourite',
  title: 'Favourite',
  page: () => import('@/pages/favourite/Favourite.page.vue'),
});
export const ProjectRoute = new AppRoute({
  key: 'project',
  path: '/project',
  title: 'Project',
  page: () => import('@/pages/project/Project.page.vue'),
});

export const useNavigationStore = defineStore('navigation', () => {
  const route = useRoute();

  const navigations = ref([HomeRoute, FursonaRoute, ProjectRoute, FavouriteRoute]);

  const currentNavigation = computed(() => {
    return navigations.value.find((navigationRoute) => navigationRoute.key === route.name);
  });
  const nextNavigation = computed(() => {
    const currentRouteName = route.name;
    const currentNavigation = navigations.value.find((navigation) => {
      return navigation.key === currentRouteName;
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
