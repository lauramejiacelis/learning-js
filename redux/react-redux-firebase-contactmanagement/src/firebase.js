import firebase from 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//Check new documentation
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAz8HaGpAiygxpTv8TX9JK4eLAtzYAj_D4",
  authDomain: "contact-management-lau.firebaseapp.com",
  projectId: "contact-management-lau",
  storageBucket: "contact-management-lau.appspot.com",
  messagingSenderId: "562444778472",
  appId: "1:562444778472:web:71b67de71c102d7dc4025d"
};

//const app = initializeApp(firebaseConfig);

const firebaseDB = firebase.initializeApp(firebaseConfig)

const db = firebaseDB.database().ref;
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider, db}