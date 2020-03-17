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
};

const actions = {
  setUser: ({ commit }, user) => {
    commit("setUser", user);
  },
  setSignedIn: ({ commit }, signedIn) => {
    commit("setSignedIn", signedIn);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
