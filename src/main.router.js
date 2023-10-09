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
  { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
