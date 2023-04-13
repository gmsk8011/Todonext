// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDww1WL56i8B1MUfX2W6qJ4AYz_o_ahyUg",
  authDomain: "todolist-ce053.firebaseapp.com",
  projectId: "todolist-ce053",
  storageBucket: "todolist-ce053.appspot.com",
  messagingSenderId: "866814728911",
  appId: "1:866814728911:web:9dda3776d8d8436c7c35ba",
  measurementId: "G-L5WSKWVYM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth, provider, db};