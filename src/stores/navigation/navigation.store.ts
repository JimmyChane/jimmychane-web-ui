import { FavouriteRoute, FursonaRoute, HomeRoute, ProjectRoute } from '@/data/Route';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

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
