export default {
  namespaced: true,
  state: {
    isSigninModalOpen: false,
  },
  getters: {
    isOpen: (state) => state.isSigninModalOpen,
  },
  mutations: {
    openModal(state) {
      document.documentElement.style.overflow = "hidden";
      state.isSigninModalOpen = true;
    },
    closeModal(state) {
      document.documentElement.style.overflow = "auto";
      state.isSigninModalOpen = false;
    },
  },
  actions: {
    open({ commit }) {
      commit("openModal");
    },
    close({ commit, dispatch }) {
      commit("closeModal");
      dispatch("auth/showNotice", false, { root: true });
    },
  },
};
