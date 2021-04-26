import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCeJyHVqcZCx8r_5O5Hj-FqK4aPqzMv49k",
  authDomain: "photogallery-bfa50.firebaseapp.com",
  projectId: "photogallery-bfa50",
  storageBucket: "photogallery-bfa50.appspot.com",
  messagingSenderId: "198240330112",
  appId: "1:198240330112:web:57d38a311e5a3aa7712165",
  measurementId: "G-NBNRJTTK8N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStore, projectStorage, timestamp };
