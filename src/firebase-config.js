// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APP_apiKey,
  authDomain: process.env.APP_authDomain,
  projectId: process.env.APP_projectId,
  storageBucket: process.env.APP_storageBucket,
  messagingSenderId: process.env.APP_messagingSenderId,
  appId: process.env.APP_appId,
  measurementId: process.env.APP_measurementId,
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firestore };
