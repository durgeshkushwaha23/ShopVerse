import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "one-cart-1fba9.firebaseapp.com",
  projectId: "one-cart-1fba9",
  storageBucket: "one-cart-1fba9.firebasestorage.app",
  messagingSenderId: "186992860347",
  appId: "1:186992860347:web:919a455411858ed3f1dd9e",

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

