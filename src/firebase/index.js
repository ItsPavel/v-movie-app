import * as firebase from "firebase/app";

const fbConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API,
  authDomain: "kinopoisk-1d894.firebaseapp.com",
  projectId: "kinopoisk-1d894",
  storageBucket: "kinopoisk-1d894.appspot.com",
  messagingSenderId: "555186411227",
  appId: "1:555186411227:web:56151977ea1b92fe195efe",
  measurementId: "G-MT76HFR0Z8",
};
export default firebase.initializeApp(fbConfig);
