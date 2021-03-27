import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9kTBD_jcobsw-X76_FqM-_xgdHiz8fhU",
  authDomain: "hh99-react-advanced.firebaseapp.com",
  projectId: "hh99-react-advanced",
  storageBucket: "hh99-react-advanced.appspot.com",
  messagingSenderId: "729041720245",
  appId: "1:729041720245:web:c721074c4edb810d27bffc",
  measurementId: "G-L3LJLWKBQ6"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export{auth, apiKey};