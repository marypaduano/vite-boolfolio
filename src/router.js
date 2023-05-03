import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import About from './pages/AboutMe.vue'

const history = createWebHistory()

const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio,
		},
		{
			path: '/about-me',
			name: 'about',
			component: About,
		},
	],
})

export { router }