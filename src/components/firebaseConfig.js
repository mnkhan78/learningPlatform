import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4xPJh7rPL83GJJ5hoGE2-i2o5TpiCzPA",
  authDomain: "organoneasy-46ebd.firebaseapp.com",
  projectId: "organoneasy-46ebd",
  storageBucket: "organoneasy-46ebd.appspot.com",
  messagingSenderId: "568744799232",
  appId: "1:568744799232:web:c1fa9ab3028bdd208c3ce5",
  measurementId: "G-ZV5TXPRKWL",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
