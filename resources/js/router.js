import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import Collection from './pages/collection.vue';
import Contanct from './pages/contact.vue';
import About from './pages/about.vue';

/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/collection',
    component: Collection
  },
  {
    path: '/contact',
    component: Contanct
  },
  {
    path: '/about',
    component: About
  }
]


export default new VueRouter({ 
  routes,
  mode: 'history'
});
