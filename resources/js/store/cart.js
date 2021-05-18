import axios from 'axios';

/**
 * @type {import("vuex").StoreOptions}
 */
 const cart = {
  namespaced: true,
  state: {
    carts: []
  },
  mutations: {
    addToCart(state, payload) {
      state.carts.push(payload);
    }
  },
  actions: {
    async addToCart(state, payload) {
      state.commit('addToCart', payload);
    },
  }
}

export default cart
