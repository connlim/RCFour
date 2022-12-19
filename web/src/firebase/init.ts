// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb5CPxFFvz3_3cfiHuCVmETJYw0RZS9jQ",
  authDomain: "rcfour-d8147.firebaseapp.com",
  projectId: "rcfour-d8147",
  storageBucket: "rcfour-d8147.appspot.com",
  messagingSenderId: "573895304880",
  appId: "1:573895304880:web:cef3d20a8d1c0e52abfd75",
  measurementId: "G-5R053BMDH4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
