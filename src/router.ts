import { createRouter, createWebHistory } from 'vue-router';

import { FavouriteRoute, FursonaRoute, HomeRoute, ProjectRoute } from '@/stores/navigation.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: HomeRoute.key,
      path: HomeRoute.path,
      component: () => import('@/pages/home/Home.page.vue'),
    },
    {
      name: FursonaRoute.key,
      path: FursonaRoute.path,
      component: () => import('@/pages/fursona/Fursona.page.vue'),
    },
    {
      name: ProjectRoute.key,
      path: ProjectRoute.path,
      component: () => import('@/pages/project/Project.page.vue'),
    },
    {
      name: FavouriteRoute.key,
      path: FavouriteRoute.path,
      component: () => import('@/pages/favourite/Favourite.page.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: { name: HomeRoute.key } },
  ],
});

export default router;
