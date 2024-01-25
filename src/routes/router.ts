import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/home/PageHome.vue'),
    },
    {
      name: 'fursona',
      path: '/fursona',
      component: () => import('@/pages/fursona/PageFursona.vue'),
    },
    {
      name: 'project',
      path: '/project',
      component: () => import('@/pages/project/PageProject.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
});

export default router;
