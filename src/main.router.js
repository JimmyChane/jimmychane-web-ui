import {
   createRouter,
   RouteRecordRaw,
   createWebHashHistory,
   createWebHistory,
} from "vue-router";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { name: "home", path: "/", component: () => import("./HomePage.vue") },
      // { name: "code", path: "/code", component: () => import("./CodePage.vue") },
      // { name: "art", path: "/art", component: () => import("./ArtPage.vue") },
      // {
      //    name: "fursona",
      //    path: "/fursona",
      //    component: () => import("./FursonaPage.vue"),
      // },

      { path: "/:pathMatch(.*)*", redirect: "/" },
   ],
});

export default router;
