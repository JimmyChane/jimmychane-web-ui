import { FursonaRoute, HomeRoute, ProjectRoute, type Route } from '@/data/Route';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const routes: Route[] = [HomeRoute, FursonaRoute, ProjectRoute];

  return {
    routes: computed(() => routes),
  };
});
