import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCTX2qJVWQWYbNmRKZ_hOXSJ2muKxozrg",
  authDomain: "r-user-3f05b.firebaseapp.com",
  projectId: "r-user-3f05b",
  storageBucket: "r-user-3f05b.appspot.com",
  messagingSenderId: "311521232945",
  appId: "1:311521232945:web:2e449a62a7563a62e06d10",
  measurementId: "G-5600T0DLSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
