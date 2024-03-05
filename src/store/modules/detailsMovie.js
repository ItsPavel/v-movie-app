export default {
  namespaced: true,
  state: {
    movieInfo: [],
    isLoaded: false,
  },
  getters: {
    movieInfo: (state) => state.movieInfo,
    isLoaded: (state) => state.isLoaded,
  },
  mutations: {
    setMovieInfo(state, data) {
      state.movieInfo.push(data);
    },
    remove(state) {
      state.movieInfo = [];
      state.isLoaded = false;
    },
    loader(state) {
      state.isLoaded = true;
    },
  },
  actions: {
    getMovieInfo({ commit }, id) {
      fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.VUE_APP_KINOPOISK_API,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          commit("setMovieInfo", data);
        })
        .catch((err) => console.log("err : ", err))
        .finally(() => commit("loader"));
    },
    removeState({ commit }) {
      commit("remove");
    },
  },
};
