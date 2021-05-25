import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDv-RkXcmbv1Bg1IRfJE5xF-VmwHtU2IS8",
    authDomain: "fluxgen-e93fa.firebaseapp.com",
    projectId: "fluxgen-e93fa",
    storageBucket: "fluxgen-e93fa.appspot.com",
    messagingSenderId: "1055083757059",
    appId: "1:1055083757059:web:f8ad7127b7361fe7849836"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase;

export default firebaseDb;
