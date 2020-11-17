// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeDw_7m1dUqKph4A003ztwvUTzUuk5Kuw",
  authDomain: "instagram-reels-clone-24632.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-24632.firebaseio.com",
  projectId: "instagram-reels-clone-24632",
  storageBucket: "instagram-reels-clone-24632.appspot.com",
  messagingSenderId: "903936977921",
  appId: "1:903936977921:web:8ceababeea7cc299732400",
  measurementId: "G-35EHJHMKZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
