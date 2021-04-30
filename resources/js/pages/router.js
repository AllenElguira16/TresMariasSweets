import VueRouter from 'vue-router';
import Home from './home';
import Admin from './admin';
import Auth from './auth'
import Account from './account';

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
    component: Admin
  }
]


export default new VueRouter({ 
  routes,
  mode: 'history'
});
