import { createStore } from 'vuex';
import cake from './cake';
import admin from './admin';
import user from './user';

const store = new createStore({
  modules: {
    user, cake, admin
  }
});

export default store;
