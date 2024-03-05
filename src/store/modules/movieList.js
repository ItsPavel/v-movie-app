export default {
  namespaced: true,
  state: {
    movieList: [],
    numPage: 1,
    isLoaded: false,
    filmName: "",
    error: "",
  },
  getters: {
    moviesOnPage: (state) => state.movieList,
    movieOnPageLength: (state) => state.movieList.length > 0,
    isLoaded: (state) => state.isLoaded,
    errorMsg: (state) => state.error,
  },
  mutations: {
    setMovies(state, data) {
      if (data.length > 0) {
        state.movieList.length > 0
          ? state.movieList.push(...data)
          : (state.movieList = data);
      } else {
        state.error = "Ничего не найдено";
      }
      state.isLoaded = false;
    },
    remove(state) {
      state.movieList = [];
      state.numPage = 1;
      state.isLoaded = false;
      state.filmName = "";
      state.error = "";
    },
    nextPage(state) {
      state.numPage++;
    },
    loader(state) {
      state.isLoaded = true;
    },
    searchInp(state, value) {
      state.filmName = value;
    },
    error(state) {
      state.isLoaded = false;
      state.error = "Что-то пошло не так";
    },
  },
  actions: {
    getMovies({ state, commit }) {
      commit("loader");
      fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=${state.numPage}&limit=6&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=genres&selectFields=poster&query=${state.filmName}`,
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
          console.log(data);
          commit("setMovies", data.docs);
        })
        .catch(() => commit("error"));
    },
    removeState({ commit }) {
      commit("remove");
    },
    nextPage({ commit }) {
      commit("nextPage");
    },
    searchInp({ commit }, filmName) {
      commit("searchInp", filmName);
    },
  },
};
