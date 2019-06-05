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
					name      : 'Inicio',
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
					name      : 'Items',
					component : () => import(/* webpackChunkName: "demo" */ './views/Items.vue')
				},
				{
					path      : '/sagas',
					name      : 'Sagas',
					component : () => import(/* webpackChunkName: "demo" */ './views/Sagas.vue')
				},
				{
					path      : '/amigos',
					name      : 'Amigos',
					component : () => import(/* webpackChunkName: "demo" */ './views/Amigos.vue')
				},
				{
					path      : '/amigos/create',
					name      : 'Criar Amigos',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/AmigoForm.vue')
				},
				{
					path      : '/sagas/create',
					name      : 'Criar Sagas',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/SagaForm.vue')
				},
				{
					path      : '/items/hq/create',
					name      : 'Criar HQ',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/HqForm.vue')
				},
				{
					path      : '/items/dlc/create',
					name      : 'Criar DLC',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/DlcForm.vue')
				},
				{
					path      : '/items/dvdcd/create',
					name      : 'Criar DVD/CD',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/DvdCdForm.vue')
				},
				{
					path      : '/items/jogotabuleiro/create',
					name      : 'Criar DVD/CD',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/JogoTabuleiroForm.vue')
				},
				{
					path      : '/items/jogodigital/create',
					name      : 'Criar JOGO DIGITAL',
					component : () => import(/* webpackChunkName: "demo" */ './views/Forms/JogoDigital.vue')
				}
			]
		}
	]
});
