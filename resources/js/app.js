import Vue from 'vue';
import VueRouter from 'vue-router';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './pages/router';
import './bootstrap';
import './index';

// library.add(faBirthdayCake)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

new Vue({
  router,
  template: '<router-view></router-view>'
}).$mount('#app')
