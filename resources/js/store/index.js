import { createStore } from 'vuex';
import cake from './cake';
import admin from './admin';
import user from './user';
import cart from './cart';
import order from './order';

const store = new createStore({
  modules: {
    user, cake, admin, cart, order
  }
});

export default store;
