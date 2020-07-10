import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import { isAuthenticated } from '@/utils/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Register.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const anonymousRoutes = [
  'login',
  'register',
];

router.beforeEach((to, from, next) => {
  if (!isAuthenticated() && !anonymousRoutes.includes(to.name)) {
    return next({ name: 'login' });
  }

  return next();
});

export default router;
