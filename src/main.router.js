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
  { path: "/:pathMatch(.*)*", redirect: { path: "/" } },
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router;
