// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCPKns8RPCu0BpbrWvlkDFlBD9u1OVKa1I",
    authDomain: "tour-34783.firebaseapp.com",
    projectId: "tour-34783",
    storageBucket: "tour-34783.appspot.com",
    messagingSenderId: "41014472985",
    appId: "1:41014472985:web:d1e2044f1e381287c8d588",
    measurementId: "G-L67BNMMNHJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new FacebookAuthProvider();
provider.addScope('user_birthday');
provider.setCustomParameters({
  'display': 'popup'
});

const auth = getAuth(app);
auth.languageCode = 'it';



const db = getFirestore(app);
export{db, auth, provider}