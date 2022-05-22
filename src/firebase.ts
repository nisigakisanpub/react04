// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD658f0pQG2xZJ6LER-XPRjeUsVUkOg7No",
  authDomain: "distribution-site-ede69.firebaseapp.com",
  projectId: "distribution-site-ede69",
  storageBucket: "distribution-site-ede69.appspot.com",
  messagingSenderId: "341293639619",
  appId: "1:341293639619:web:84d350e76e80af412e3f76",
  measurementId: "G-GL8ZW4XGLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();


