import Vue from 'vue'
import Vuex from 'vuex';
import cake from './cake';
import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user, cake
  }
});

export default store;
