import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAj-VXp9GMkKaGSCn5a4wyf7Xka83hMNNQ",
    authDomain: "unique-trendz-tvm.firebaseapp.com",
    databaseURL: "https://unique-trendz-tvm-default-rtdb.firebaseio.com",
    projectId: "unique-trendz-tvm",
    storageBucket: "unique-trendz-tvm.appspot.com",
    messagingSenderId: "101304532588",
    appId: "1:101304532588:web:db1ec86146ef687ae12249"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase;

export default firebaseDb;
