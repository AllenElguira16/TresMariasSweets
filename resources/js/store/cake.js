import axios from 'axios';

/**
 * @type {import("vuex").StoreOptions}
 */
 const cake = {
  namespaced: true,
  state: {
    cakes: []
  },
  mutations: {
    setCakes(state, payload) {
      state.cakes = payload;
    }
  },
  actions: {
    async setCakes(state) {
      let response = await axios.get("/api/cakes");
      if (response.data.success) {
        state.commit('setCakes', response.data.cakes);
      }
    },
    async addCake(state, payload) {
      const response = await axios.post('/api/cakes', payload);
      if (response.data.success) {
        state.dispatch('setCakes');
      }
    },
    async editCake(state, { id, input }) {
      const response = await axios.put(`/api/cakes/${id}`, input);
      if (response.data.success) {
        state.dispatch('setCakes');
      }
    },
    async deleteCake(state, { id }) {
      const response = await axios.delete(`/api/cakes/${id}`);
      if (response.data.success) {
        state.dispatch('setCakes');
      }
    }
  }
}

export default cake
