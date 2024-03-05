export default {
  namespaced: true,
  state: {
    newMovieList: [],
    isLoaded: false,
  },
  getters: {
    newMovies: (state) => state.newMovieList,
    isLoaded: (state) => state.isLoaded,
  },
  mutations: {
    setNewMovie(state, data) {
      state.newMovieList = data;
    },
    isLoaded(state) {
      state.isLoaded = true;
    },
  },
  actions: {
    async getNewMovie({ commit }) {
      await fetch(
        `https://api.kinopoisk.dev/v1.4/movie?limit=6&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=genres&selectFields=poster&notNullFields=name&sortField=releaseYears.start&sortType=-1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": process.env.VUE_APP_KINOPOISK_API,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          commit("setNewMovie", json.docs);
        })
        .finally(() => commit("isLoaded"));
    },
  },
};
