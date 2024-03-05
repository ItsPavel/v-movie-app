import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/index";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    db: {},
    userInfo: {
      token: "",
      email: "",
      userId: "",
      refreshToken: "",
      expiresIn: "",
      registered: false,
    },
    firestoreData: {
      name: "",
      movieList: [],
    },
    isOpenBlockInfo: false,
  },
  getters: {
    // setdb: (state) => (state.db = getFirestore(app)),
    userInfo: (state) => state.userInfo,
    firestoreData: (state) => state.firestoreData,
    isOpen: (state) => state.isOpenBlockInfo,
    isLoggedIn: (state) => state.userInfo.registered,
  },
  mutations: {
    showNotice(state, flag) {
      state.isOpenBlockInfo = flag;
    },
    setUserInfo(state, data) {
      state.userInfo = {
        token: data.idToken,
        email: data.email,
        userId: data.localId,
        refreshToken: data.refreshToken,
        expiresIn: data.expiresIn,
        registered: data.registered,
      };
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: state.userInfo.token,
          refreshToken: state.userInfo.refreshToken,
          registered: state.userInfo.registered,
          expiresIn: state.userInfo.expiresIn,
          userId: state.userInfo.userId,
        })
      );
    },
    getFirestoreData(state, { name, movieList }) {
      state.firestoreData = {
        name,
        movieList,
      };
    },
    addMovieList(state, itemId) {
      if (!state.firestoreData.movieList.includes(itemId)) {
        state.firestoreData.movieList.push(itemId);
      } else {
        alert("Этот фильм уже добавлен в избранное");
      }
    },
    removeFromFavorites(state, itemId) {
      state.firestoreData.movieList = state.firestoreData.movieList.filter(
        (id) => id !== itemId
      );
    },
    logout(state) {
      state.userInfo = {
        token: "",
        email: "",
        userId: "",
        refreshToken: "",
        expiresIn: "",
        registered: false,
      };
      state.firestoreData = {
        name: "",
        movieList: [],
      };
      localStorage.removeItem("userToken");
      router.push("/");
    },
  },
  actions: {
    async signin({ dispatch, commit }, { email, password }) {
      try {
        let res = await signInWithEmailAndPassword(getAuth(), email, password);
        let data = res._tokenResponse;
        commit("setUserInfo", data);
        dispatch("getFirestoreData");
        dispatch("modalStore/close", null, { root: true });
      } catch (error) {
        dispatch("showNotice", true);
      }
    },
    showNotice({ commit }, flag) {
      commit("showNotice", flag);
    },
    getMoviesForFavorites({ state, dispatch }) {
      dispatch("detailsMovie/removeState", null, { root: true });
      state.firestoreData.movieList.forEach((id) =>
        dispatch("detailsMovie/getMovieInfo", id, { root: true })
      );
    },
    async getDocRef({ state }) {
      const db = getFirestore(app);
      return await doc(db, "users", state.userInfo.userId);
    },
    async getFirestoreData({ commit, dispatch }) {
      const docRef = await dispatch("getDocRef");
      const docSnap = (await getDoc(docRef)).data();
      commit("getFirestoreData", docSnap);
    },
    async addToFavorites({ state, commit, getters, dispatch }, id) {
      if (getters.isLoggedIn) {
        commit("addMovieList", id);
        const docRef = await dispatch("getDocRef");
        await setDoc(docRef, {
          name: state.firestoreData.name,
          movieList: state.firestoreData.movieList,
        });
      } else {
        dispatch("modalStore/open", false, { root: true });
        alert("Войдите в аккаунт");
      }
    },
    async removeFromFavorites({ commit, state, dispatch }, id) {
      console.log(id);
      commit("removeFromFavorites", id);
      const docRef = await dispatch("getDocRef");
      await updateDoc(docRef, {
        movieList: state.firestoreData.movieList,
      });
      dispatch("getMoviesForFavorites");
    },
    logout({ commit }) {
      commit("logout");
    },
  },
};
