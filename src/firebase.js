// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let app
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID,
};
if(getApps().length){
 app = getApps();
}else{
  app = (initializeApp(firebaseConfig))
}
// Initialize Firebase
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
export const auth = getAuth() 
const analytics = getAnalytics(app);    