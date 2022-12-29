import {
	createRouter,
	RouteRecordRaw,
	createWebHashHistory,
	createWebHistory,
} from "vue-router";

const history = createWebHashHistory();
const routes: Array<RouteRecordRaw> = [
	{ name: "home", path: "/", component: () => import("./HomePage.vue") },
	{ name: "code", path: "/code", component: () => import("./CodePage.vue") },
	{ name: "art", path: "/art", component: () => import("./ArtPage.vue") },
	{
		name: "fursona",
		path: "/fursona",
		component: () => import("./FursonaPage.vue"),
	},

	{ path: "/home", redirect: "/" },
];
const router = createRouter({ history, routes });

export default router;
