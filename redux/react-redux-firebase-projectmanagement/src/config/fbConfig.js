// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyAfQEcSsXHOgVB3jg0KZXqNLqZJAaDJ1r4',
  authDomain: 'project-management-lau.firebaseapp.com',
  projectId: 'project-management-lau',
  storageBucket: 'project-management-lau.appspot.com',
  messagingSenderId: '309882035171',
  appId: '1:309882035171:web:d3db2c7aa40d176ef0ded6',
  measurementId: 'G-9RXM30HJN6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
export const db = getFirestore(app);

//collection ref
export const colRef = collection(db, 'projects');
