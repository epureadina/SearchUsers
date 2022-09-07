import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv_7oX2MeUF9_zVAhwavfLK-Ul_5YqDHA",
  authDomain: "search-users-37ed2.firebaseapp.com",
  projectId: "search-users-37ed2",
  storageBucket: "search-users-37ed2.appspot.com",
  messagingSenderId: "282590088375",
  appId: "1:282590088375:web:b3abbafb81056c161b9132",
  measurementId: "G-7J12RBN2JT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
