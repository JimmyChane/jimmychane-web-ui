import { createRouter, createWebHistory } from 'vue-router';

import {
  FAVOURITE_ROUTE,
  FURSONA_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  VALENTINE_ROUTE,
} from '@/stores/navigation.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    HOME_ROUTE.toVueRoute(),
    FURSONA_ROUTE.toVueRoute(),
    PROJECT_ROUTE.toVueRoute(),
    FAVOURITE_ROUTE.toVueRoute(),
    VALENTINE_ROUTE.toVueRoute(),
    { path: '/:pathMatch(.*)*', redirect: { name: HOME_ROUTE.id } },
  ],
});

export default router;
