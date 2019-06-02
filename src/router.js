import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '@/layout/DashboardLayout';
import AuthLayout from '@/layout/AuthLayout';
Vue.use(Router);

export default new Router({
	linkExactActiveClass : 'active',
	routes               : [
		{
			path      : '/',
			redirect  : 'login',
			component : AuthLayout,
			children  : [
				{
					path      : '/login',
					name      : 'login',
					component : () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
				},
				{
					path      : '/register',
					name      : 'register',
					component : () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
				}
			]
		},
		{
			path      : '/dashboard',
			redirect  : 'dashboard',
			component : DashboardLayout,
			children  : [
				{
					path      : '/dashboard',
					name      : 'dashboard',
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component : () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
				},
				{
					path      : '/profile',
					name      : 'profile',
					component : () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
				},
				{
					path      : '/items',
					name      : 'items',
					component : () => import(/* webpackChunkName: "demo" */ './views/Items.vue')
				},
				{
					path      : '/sagas',
					name      : 'sagas',
					component : () => import(/* webpackChunkName: "demo" */ './views/Sagas.vue')
				},
				{
					path      : '/amigos',
					name      : 'amigos',
					component : () => import(/* webpackChunkName: "demo" */ './views/Amigos.vue')
				},
				{
					path      : '/amigos/create',
					name      : 'amigos-form',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/AmigoForm.vue')
				},
				{
					path      : '/sagas/create',
					name      : 'sagas-form',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/SagaForm.vue')
				}
			]
		}
	]
});
