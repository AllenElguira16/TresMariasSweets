import axios from 'axios';

/**
 * @type {import("vuex").StoreOptions}
 */
const order = {
  namespaced: true,
  state: {
    orders: {
      requested: [],
      accepted: [],
      placed: [],
      cancelled: [],
      done: [],
    },
  },
  mutations: {
    setOrders(state, { status, orders }) {
      state.orders[status] = orders;
    },
  },
  actions: {
    async getOrders({commit}, { status }) {
      const response = await axios.get(`/api/orders?status=${status}&is_mine`);
      const orders = response.data.orders;

      commit('setOrders', {
        status,
        orders
      });
    },
    async changeOrderStatus({}, { id, status }) {
      await axios.put(`/api/orders/${id}`, {
        status
      });
    },
    async requestOrder({state}, { carts }) {
      await axios.post('/api/orders', { order: carts });
    }
  }
}

export default order
