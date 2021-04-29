import axios from 'axios';

/**
 * @type {import("vuex").StoreOptions}
 */
const user = {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser: (state, payload) => state.user = payload,
  },
  actions: {
    async setUser(state) {
      const { data } = await axios.get('/api/user');
      if (data.success) {
        state.commit('setUser', data)
      }
    },
    async signOut(state) {
      const { data } = await axios.delete('/api/user/sign-out');
      if (data.success) {
        state.commit('setUser', null);
      }
    },
  },
  getters: {
    isLoggedIn: (state) => state.user !== null
  }
}

export default user
