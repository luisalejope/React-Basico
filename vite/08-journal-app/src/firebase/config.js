// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFv3nF6svXiGWlL5MHva_KUgKeRXw2Eio",
  authDomain: "react-cursos-a637b.firebaseapp.com",
  projectId: "react-cursos-a637b",
  storageBucket: "react-cursos-a637b.appspot.com",
  messagingSenderId: "665252397794",
  appId: "1:665252397794:web:e269bbd57f3ac1e35314bb"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(firebaseApp);

export const FirebaseDB = getFirestore(firebaseApp)

