import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import About from './pages/AboutMe.vue'
import ProjectShow from './pages/ProjectShow.vue'
import ErrorPage from './pages/ErrorPage.vue'

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
			path: '/portfolio/:slug',
			name: 'projectShow',
			component: ProjectShow,
            props: true,
		},
		{
			path: '/about-me',
			name: 'about',
			component: About,
		},
        {
			path: '/errorpage',
			name: 'errorpage',
			component: ErrorPage,
		},
        
	],
})

export { router }