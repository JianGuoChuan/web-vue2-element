import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/secondary.vue')
	}
]

const router = new VueRouter({
	mode: 'history', // hash,注意，history部署时需要配置，不然会404
	base: process.env.BASE_URL,
	routes
})

export default router
