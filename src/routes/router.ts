import { FavouriteRoute, FursonaRoute, HomeRoute, ProjectRoute } from '@/data/Route';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: HomeRoute.key,
      path: HomeRoute.path,
      component: () => import('@/pages/home/PageHome.vue'),
    },
    {
      name: FursonaRoute.key,
      path: FursonaRoute.path,
      component: () => import('@/pages/fursona/PageFursona.vue'),
    },
    {
      name: ProjectRoute.key,
      path: ProjectRoute.path,
      component: () => import('@/pages/project/PageProject.vue'),
    },
    {
      name: FavouriteRoute.key,
      path: FavouriteRoute.path,
      component: () => import('@/pages/favourite/PageFavourite.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: { name: HomeRoute.key } },
  ],
});

export default router;
