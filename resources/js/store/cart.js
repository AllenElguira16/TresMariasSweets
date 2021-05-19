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
    async requestOrder({state}) {
      const carts = state.carts.map(cart => {
        return {
          cake_id: cart.cake_id,
          instructions: cart.instructions,
          picture: cart.picture,
          quantity: cart.quantity,
          status: 'requested'  
        };
      });

      await axios.post('/api/orders', { order: carts });
    }
  }
}

export default cart
