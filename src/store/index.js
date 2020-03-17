import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
  },
  getters: {
    getAuth: (state) => state.signedIn,
  },
  mutations: {
    SIGN_IN(state) {
      state.signedIn = true;
    },
  },
  actions: {
    signIn({ commit }) {
      commit("SIGN_IN");
    },
  },
  modules: {},
});
