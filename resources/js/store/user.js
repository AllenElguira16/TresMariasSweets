import axios from 'axios';
import router from '../pages/router';

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
    async setUser({ commit }) {
      const { data } = await axios.get('/api/user/auth');
      if (data.success) {
        commit('setUser', data.user)
      }
    },
    async signin({ commit }, payload) {
      const { data } = await axios.post('/api/user/auth/sign-in', payload);
      alert(data.message);
      if (data.success) {
        commit('setUser', data.user);
        router.push('/');
      }
    },
    async signup({ commit }, payload) {
      const { data } = await axios.post("/api/user/auth/sign-up", payload);
      alert(data.message);
      if (data.success) {
        commit('setUser', data.user);
        router.push('/');
      }
    },
    async signout({ commit }) {
      const { data } = await axios.post('/api/user/auth/sign-out');
      if (data.success) {
        commit('setUser', null);
      }
    },
    async editAccount({ commit, state }, payload) {
      const { data } = await axios.put(`/api/user/auth/${state.user.id}`, payload);
      alert(data.message);
      if (data.success) {
        commit('setUser', data.user);
        window.location.href = '/'
      }
    },
    async deleteAccount({ commit, state }) {
      const { data } = await axios.delete(`/api/user/auth/${state.user.id}`);
      alert(data.message);
      if (data.success) {
        commit('setUser', null);
        window.location.href = '/'
      }
    },
  },
  getters: {
    isLoggedIn: (state) => state.user !== null
  }
}

export default user
