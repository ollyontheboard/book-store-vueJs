import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/login')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
