import { useState } from "react";
import { signIn, mySignOut } from "../../firebase/auth";
import { addEvent } from "../../firebase/functions/events/FirebaseEventService";
import { auth } from "../../firebase/init";
import { onAuthStateChanged } from "@firebase/auth";

const Nav = () => {
  const [uid, setUid] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUid(user.uid);
    } else {
      // User is signed out
      setUid("");
    }
  });
  return (
    <div>
      Nav Bar
      {uid === "" ? (
        <button onClick={() => signIn()}>Sign In</button>
      ) : (
        <button onClick={() => mySignOut()}>Sign Out</button>
      )}
      <button onClick={() => addEvent()}>Add event</button>
    </div>
  );
};

export default Nav;
