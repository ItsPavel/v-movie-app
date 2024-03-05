import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import firebase from "./firebase";
import "@/assets/style/main.scss";

library.add(fas);
createApp(App)
  .use(router)
  .use(firebase)
  .use(store)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
