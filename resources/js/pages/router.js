import * as VueRouter from 'vue-router';
import Home from './home';
import Auth from './auth'
import Account from './account';

import Admin from './admin';
import AdminCakeList from './admin/cake-list';

/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
  {
    path: '/',
    component: Home
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
        path: '/admin/cakes',
        component: AdminCakeList
      }
    ]
  }
]


// export default new VueRouter({ 
//   routes,
//   mode: 'history'
// });

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
