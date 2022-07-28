// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB_8oGmxgzUw4NA8GZvZscXvJgqH9SEljk",
  authDomain: "caviar-ef3f1.firebaseapp.com",
  projectId: "caviar-ef3f1",
  storageBucket: "caviar-ef3f1.appspot.com",
  messagingSenderId: "2274624986",
  appId: "1:2274624986:web:3aba6447aba0ef42e92ce3",
  measurementId: "G-NQRY2R09D0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db,auth}