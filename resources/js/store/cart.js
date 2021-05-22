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
    },
    deleteCart(state, {id}) {
      state.carts.splice(id, 1);
    },
    updateQuantity(state, { id, newQuantity }) {
      state.carts[id].quantity = newQuantity;
    }
  },
  actions: {
    async addToCart(state, payload) {
      state.commit('addToCart', payload);
    },
    async deleteCart(state, { id }) {
      state.commit('deleteCart', { id });
    },
    async updateQuantity(state, { id, newQuantity }) {
      state.commit('updateQuantity', { id, newQuantity });
    },
  }
}

export default cart
