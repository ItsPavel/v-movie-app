export default {
  namespaced: true,
  state: {
    topMovieList: [],
    isLoaded: false,
  },
  getters: {
    topMovies: (state) => state.topMovieList,
    isLoaded: (state) => state.isLoaded,
  },
  mutations: {
    setTopMovies(state, data) {
      state.topMovieList = data;
    },
    isLoading(state) {
      state.isLoaded = true;
    },
  },
  actions: {
    async getTopMovies({ commit }) {
      await fetch(
        `https://api.kinopoisk.dev/v1.4/movie?limit=4&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=genres&selectFields=poster&notNullFields=name&notNullFields=description&sortField=rating.kp&sortType=-1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": process.env.VUE_APP_KINOPOISK_API,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          commit("setTopMovies", data.docs);
        })
        .catch((err) => console.log(err.massege))
        .finally(() => commit("isLoading"));
    },
  },
};

//
