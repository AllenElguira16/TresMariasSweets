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
      state.cart.push(payload);
    }
  },
  actions: {
    async addToCart(state, { id }) {
      state.commit('addToCart', id);
    },
  }
}

export default cart
