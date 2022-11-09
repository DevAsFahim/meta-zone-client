// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZksqA-LBaRynrtujbaBjwNveJhidsMM8",
  authDomain: "meta-zone.firebaseapp.com",
  projectId: "meta-zone",
  storageBucket: "meta-zone.appspot.com",
  messagingSenderId: "11936795326",
  appId: "1:11936795326:web:41016042a7cc16981d6cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;