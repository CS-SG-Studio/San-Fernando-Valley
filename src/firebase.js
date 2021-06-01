import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgTmYpuzLygcqAULqfwpsp7lmK1o5Ydik",
    authDomain: "rcc-login.firebaseapp.com",
    projectId: "rcc-login",
    storageBucket: "rcc-login.appspot.com",
    messagingSenderId: "1069941033052",
    appId: "1:1069941033052:web:34e762416e467061f1be99",
    measurementId: "G-3WSTJG659P"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
