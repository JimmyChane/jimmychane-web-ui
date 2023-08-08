import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./views/home/PageHome.vue"),
    },
    {
      name: "code",
      path: "/code",
      component: () => import("./views/code/PageCode.vue"),
    },
    // { name: "art", path: "/art", component: () => import("./PageArt.vue") },
    {
      name: "fursona",
      path: "/fursona",
      component: () => import("./views/fursona/PageFursona.vue"),
    },

    { path: "/:pathMatch(.*)*", redirect: { path: "/" } },
  ],
});

export default router;
