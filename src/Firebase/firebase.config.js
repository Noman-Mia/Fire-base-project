// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCt71RLgCWPIqZX0VckiDDKqIlMtihAfc",
  authDomain: "user-email-password-72dda.firebaseapp.com",
  projectId: "user-email-password-72dda",
  storageBucket: "user-email-password-72dda.appspot.com",
  messagingSenderId: "397219422249",
  appId: "1:397219422249:web:f8f222c7de4b8b9f693c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;