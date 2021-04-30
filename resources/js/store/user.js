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
    async setUser(state) {
      const { data } = await axios.get('/api/user');
      if (data.success) {
        state.commit('setUser', data.user)
      }
    },
    async signin(state, payload) {
      const { data } = await axios.post('/api/user/sign-in', payload);
      alert(data.message);
      if (data.success) {
        state.commit('setUser', data.user);
        router.push('/');
      }
    },
    async signup(state, payload) {
      const { data } = await axios.post("/api/user/sign-up", payload);
      alert(data.message);
      if (data.success) {
        state.commit('setUser', data.user);
        router.push('/');
      }
    },
    async editAccount(state, payload) {
      const { data } = await axios.put("/api/user/edit-account", payload);
      alert(data.message);
      if (data.success) {
        state.commit('setUser', data.user);
        router.go('/');
      }
    },
    async signout(state) {
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
