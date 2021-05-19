import axios from 'axios';

/**
 * @type {import("vuex").StoreOptions}
 */
 const cake = {
  namespaced: true,
  state: {
    loginStatus: 'logged-out'
  },
  mutations: {
    setLogState(state, payload) {
      state.loginStatus = payload;
    }
  },
  actions: {
    logIn(state, { username, password }) {
      if (username !== 'admin' && password !== 'password') {
        alert('Incorrect Credentials');
      }
      state.commit('setLogState', 'logged-in')
    },
    logOut(state) {
      state.commit('setLogState', 'logged-out')
    }
  }
}

export default cake
