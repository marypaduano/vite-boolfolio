import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import AboutUs from './pages/Portfolio.vue'
import Contacts from './pages/AboutMe.vue'

const history = createWebHistory()
console.log('history: ', history)

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
			component: AboutMe,
		},
	],
})

export { router }