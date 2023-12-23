// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXwEDKAw7hjWFwdR5isfbSv5xvoDTIdwk",
  authDomain: "fitnearn-demo-site.firebaseapp.com",
  projectId: "fitnearn-demo-site",
  storageBucket: "fitnearn-demo-site.appspot.com",
  messagingSenderId: "1001653870612",
  appId: "1:1001653870612:web:b29d1ac1f9a4282ec6c701",
  measurementId: "G-SE8Q0SGWEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 
 const provider = new GoogleAuthProvider()
export {auth,provider}