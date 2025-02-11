import { defineStore } from 'pinia';
import { type Component, computed, markRaw, ref } from 'vue';
import { useRoute } from 'vue-router';

import FoxIcon from '@/components/icon/Fox.icon.vue';
import HomeIcon from '@/components/icon/Home.icon.vue';

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
