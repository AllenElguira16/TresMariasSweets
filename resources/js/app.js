import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);

import router from './pages/router';
import './bootstrap';
import './index';
import store from './store';

new Vue({
  router,
  template: '<router-view/>',
  store
}).$mount('#app')
