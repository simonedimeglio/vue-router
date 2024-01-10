// Importa funzioni createRouter e createWebHistory dal pacchetto vue-router
import { createRouter, createWebHistory } from "vue-router";

// Importa i componenti delle viste
import HomeView from "../views/HomeView.vue";

// Definisci le route dell'applicazione
const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// Code-splitting della route about per il lazy-loading
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

// Crea l'istanza del router
const router = createRouter({
	// Configura il tipo di history da utilizzare
	history: createWebHistory(process.env.BASE_URL),
	// Configura le route definite in precedenza
	routes,
});

// Esporta l'istanza del router per l'uso nell'applicazione
export default router;





