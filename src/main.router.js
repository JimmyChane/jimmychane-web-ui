import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
  createWebHistory,
  RouterOptions,
} from "vue-router";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router;
