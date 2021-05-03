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
      state.commit('setCakes', response.data);
    }
  }
}

export default cake
