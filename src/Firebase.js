// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAodhxu_l9an4_PIHdxhkXruzA2cDsdibo",
  authDomain: "fir-auth-new-ab6c5.firebaseapp.com",
  projectId: "fir-auth-new-ab6c5",
  storageBucket: "fir-auth-new-ab6c5.appspot.com",
  messagingSenderId: "711226523505",
  appId: "1:711226523505:web:d5cb8539698cbe554c80d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app