import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { addUserIfNotExist } from "./functions/users";

import { auth } from "./init";

const provider = new GoogleAuthProvider();

export async function signIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;

      console.log(user);

      addUserIfNotExist(user);
    })
    .catch((error) => {
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

export async function mySignOut() {
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
    })
    .catch((error) => {
      console.log("Sign out failed");
    });
}
