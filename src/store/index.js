import { createStore } from "vuex";
import modalStore from "./modules/modalStore";
import auth from "./modules/auth";
import movieList from "./modules/movieList";
import newMovies from "./modules/newMovies";
import topMovies from "./modules/topMovies";
import detailsMovie from "./modules/detailsMovie";

export default createStore({
  modules: {
    modalStore,
    auth,
    movieList,
    newMovies,
    topMovies,
    detailsMovie,
  },
  strict: process.env.NODE_ENV !== "production",
});
