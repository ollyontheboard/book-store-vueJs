import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/store';
// eslint-disable-next-line no-unused-vars
import IsLoggedIn from "./guard/IsLoggedIn";
import AuthInit from "./guard/Authinit";
import InitProduct from "./guard/initProduct";
import mountAuth from "./guard/mountAuth";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    beforeEnter: multiple([InitProduct, mountAuth] ),
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  },
  {
    path: '/faq',
    beforeEnter: mountAuth,
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/faq.vue')
  },
  {
    path: '/contact',
    beforeEnter: mountAuth,
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  },
  {
    path: '/auth/login',
    beforeEnter: AuthInit,
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/auth')
  },
  {
    path: '/product-details/:id',
    beforeEnter: mountAuth,
    name: 'product_details',
    component: () => import(/* webpackChunkName: "about" */ '../views/product_details')
  },
  {
    path: '/view-cart/',
    name: 'view-cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/view-cart')
  },
  {
    path: '/authenticated/dashboard',
    beforeEnter:IsLoggedIn,
    name: 'account-board',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/account-board')
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

function multiple(guards) {
	return (to, from, next) => {
		const stack = [].concat(guards);
		function another() {
			const guard = stack.pop();
			guard ? guard(to, from, another) : next()
		}
		another();
	}
}

export default router
