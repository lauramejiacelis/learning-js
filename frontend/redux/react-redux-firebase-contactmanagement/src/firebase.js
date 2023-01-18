import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz8HaGpAiygxpTv8TX9JK4eLAtzYAj_D4",
  authDomain: "contact-management-lau.firebaseapp.com",
  projectId: "contact-management-lau",
  storageBucket: "contact-management-lau.appspot.com",
  messagingSenderId: "562444778472",
  appId: "1:562444778472:web:71b67de71c102d7dc4025d"
};

const app = initializeApp(firebaseConfig);

//const firebaseDB = firebase.initializeApp(firebaseConfig)

//const db = firebaseDB.database().ref;
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const colRef = collection(db, 'contacts')

export {auth, googleAuthProvider, facebookAuthProvider, db, colRef}