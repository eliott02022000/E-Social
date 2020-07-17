import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
  },
  modules: {
  },
  state: {
    isLoggedIn: false,
  },
  mutations: {
    TOGGLE_LOGIN_STATUS: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
