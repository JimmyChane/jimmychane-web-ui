import {
   createRouter,
   createWebHashHistory,
   RouteRecordRaw,
   createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
   {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
   },
   {
      path: "/intro",
      name: "intro",
      component: () => import("../views/IntroPage.vue"),
   },
   {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryPage.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
