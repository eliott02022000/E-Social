import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import Home from '../views/Home';
import { isAuthenticated } from '../utils/auth';

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
    path: '/myinfo',
    name: 'myinfo',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/UserInfo.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Users.vue'),
  },
  {
    path: '/getuser/:userid',
    name: 'getuser',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/GetOtherUser.vue'),
  },
  {
    path: '/',
    name: 'home',
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
