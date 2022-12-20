import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const providerGG = new GoogleAuthProvider();
// providerGG.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });
  
// providerGG.addScope('https://www.googleapis.com/auth/contacts.readonly');
const authGG = getAuth(app);
authGG.languageCode = 'it';
export {authGG, providerGG}
