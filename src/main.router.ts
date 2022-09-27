import {
   createRouter,
   RouteRecordRaw,
   createWebHashHistory,
   createWebHistory,
} from "vue-router";

const history = createWebHistory();
const routes: Array<RouteRecordRaw> = [];
const router = createRouter({ history, routes });

export default router;
