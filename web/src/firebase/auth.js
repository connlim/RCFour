import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "./init";

const provider = new GoogleAuthProvider();

export function signIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function mySignOut() {
  signOut(auth).then(() => {
    console.log("Sign out successful");
  }).catch((error) => {
    console.log("Sign out failed");
  });
}
