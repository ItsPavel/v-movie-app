import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import AboutUsView from "../views/AboutProjectView.vue";
import MoviePage from "../views/MoviePage.vue";
import ErrorView from "../views/ErrorView.vue";
import SignupView from "../views/SignupView.vue";
import FavoritesPage from "../views/FavoritesPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUsView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesPage,
    meta: {
      auth: true,
    },
  },
  {
    name: "movie",
    path: "/catalog/:id",
    component: MoviePage,
  },
  {
    path: "/:any(.*)",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
  linkActiveClass: "header__link--active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/isLoggedIn"]) {
    next("/");
    store.dispatch("modalStore/open");
  } else {
    next();
  }
});
export default router;
