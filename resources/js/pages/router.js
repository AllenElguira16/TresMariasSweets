import * as VueRouter from 'vue-router';

import Home from './home';
import Main from './home/main';
import HomeOrder from './home/order';

import Auth from './auth'
import Account from './account';

import Admin from './admin';
import AdminOrder from './admin/order';
import AdminCakeList from './admin/cake-list';

/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Main
      },
      {
        path: '/orders',
        component: HomeOrder
      }
    ]
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/admin',
        component: AdminCakeList
      },
      {
        path: '/admin/orders',
        component: AdminOrder
      }
    ]
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
