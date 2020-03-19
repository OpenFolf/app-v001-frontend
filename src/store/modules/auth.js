import router from "@/router"; // DEBUG: ADDED ROUTER IMPORT TO REDIRECT AFTER LOG OUT - AEXX

const state = {
  user: null,
  signedIn: false,
};

const getters = {
  user: (state) => {
    return state.user;
  },
  signedIn: (state) => {
    return state.signedIn;
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  setSignedIn: (state, signedIn) => {
    state.signedIn = signedIn;
  },
  // DEBUG: ADDED LOG OUT MUTATION - AEXX
  LOG_OUT: (state) => {
    state.user = null;
    state.signedIn = false;
    sessionStorage.clear();
    router.push({ name: "auth" });
  },
};

const actions = {
  setUser: ({ commit }, user) => {
    commit("setUser", user);
  },
  setSignedIn: ({ commit }, signedIn) => {
    commit("setSignedIn", signedIn);
  },
  // DEBUG: ADDED LOG OUT ACTION - AEXX
  logOut: ({ commit }) => {
    commit("LOG_OUT");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
