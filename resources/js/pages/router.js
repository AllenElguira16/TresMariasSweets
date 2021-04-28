import VueRouter from 'vue-router';
import Home from './home';
import Admin from './admin';
import Account from './account'

/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/account',
    component: Account
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
