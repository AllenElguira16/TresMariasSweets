import { createStore } from 'vuex';
import cake from './cake';
import admin from './admin';
import user from './user';
import cart from './cart';

const store = new createStore({
  modules: {
    user, cake, admin, cart
  }
});

export default store;
