import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Connect from "../views/Connect.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{ path: "/", redirect: "/about" },
	{ path: "/about", name: "About", component: About },
	{ path: "/experience", name: "Experience", component: Experience },
	{ path: "/projects", name: "Projects", component: Projects },
	{ path: "/connect", name: "Connect", component: Connect },
	{ path: "/:pathMatch(.*)*", name: "Not Found", component: NotFound },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
