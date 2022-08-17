import {
   createRouter,
   RouteRecordRaw,
   createWebHashHistory,
   createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
   {
      path: "/",
      name: "home",
      component: () => import("../views/home/HomePage.vue"),
   },
   { path: "/home", redirect: "/" },

   {
      path: "/intro",
      name: "intro",
      component: () => import("../views/intro/IntroPage.vue"),
   },
   {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/gallery/GalleryPage.vue"),
   },
   {
      path: "/project",
      name: "project",
      component: () => import("../views/project/ProjectPage.vue"),
   },

   // redirect the rest
   { path: "/:pathMatch(.*)*", redirect: "home" },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
