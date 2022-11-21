// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: '...',
  authDomain: 'project-management-lau.firebaseapp.com',
  projectId: 'project-management-lau',
  storageBucket: 'project-management-lau.appspot.com',
  messagingSenderId: '...',
  appId: '...',
  measurementId: '...',
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
export const colRef = collection(db, 'projects');
