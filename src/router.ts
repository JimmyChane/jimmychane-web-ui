import { createRouter, createWebHistory } from 'vue-router';

import { FavouriteRoute, FursonaRoute, HomeRoute, ProjectRoute } from '@/stores/navigation.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    HomeRoute.toVueRoute(),
    FursonaRoute.toVueRoute(),
    ProjectRoute.toVueRoute(),
    FavouriteRoute.toVueRoute(),
    { path: '/:pathMatch(.*)*', redirect: { name: HomeRoute.key } },
  ],
});

export default router;
