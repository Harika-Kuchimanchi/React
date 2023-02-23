import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3JQ0YXyXZt2eoX2_PBvC7PAIBwIp_Cc",
  authDomain: "registration-page-8f442.firebaseapp.com",
  databaseURL: "https://registration-page-8f442-default-rtdb.firebaseio.com",
  projectId: "registration-page-8f442",
  storageBucket: "registration-page-8f442.appspot.com",
  messagingSenderId: "355039738679",
  appId: "1:355039738679:web:891a31917f19637b4138b2",
  measurementId: "G-106F3GVF40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);