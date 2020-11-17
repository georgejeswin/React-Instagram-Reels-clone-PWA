// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbKuD-eDRvId-AwEYVnCBAD6x3zj8vB38",
  authDomain: "ig-reels-clone-8a3c4.firebaseapp.com",
  databaseURL: "https://ig-reels-clone-8a3c4.firebaseio.com",
  projectId: "ig-reels-clone-8a3c4",
  storageBucket: "ig-reels-clone-8a3c4.appspot.com",
  messagingSenderId: "99466663759",
  appId: "1:99466663759:web:72fea78030cda6ef36973a",
  measurementId: "G-S6H22QQ8CT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
