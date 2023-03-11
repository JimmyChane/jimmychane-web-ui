import {
   createRouter,
   RouteRecordRaw,
   createWebHashHistory,
   createWebHistory,
} from "vue-router";

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { name: "home", path: "/", component: () => import("./PageHome.vue") },
      { name: "code", path: "/code", component: () => import("./PageCode.vue") },
      // { name: "art", path: "/art", component: () => import("./PageArt.vue") },
      {
         name: "fursona",
         path: "/fursona",
         component: () => import("./PageFursona.vue"),
      },

      { path: "/:pathMatch(.*)*", redirect: { path: "/" } },
   ],
});

export default router;
