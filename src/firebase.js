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
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId:process.env.appId,
  measurementId:process.env.measurementId
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