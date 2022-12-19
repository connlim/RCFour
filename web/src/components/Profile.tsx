import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../firebase/functions/users";
import { auth } from "../firebase/init";
import { AppUser } from "../types/AppUser";

export default function Profile() {
  const [user, setUser] = useState<AppUser | null>(null);
  let { uid } = useParams();

  useEffect(() => {
    if (uid != null && uid !== "") {
      getUserById(uid).then((user) => {
        if (user != null) {
          setUser(user);
        }
      });
    } else if (auth.currentUser != null) {
      getUserById(auth.currentUser.uid).then((user) => {
        if (user != null) {
          setUser(user);
        }
      });
    }
  }, [uid]);

  return (
    <React.Fragment>
      {user != null ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Id: {user.uid}</p>
        </div>
      ) : (
        <div>Finding user...</div>
      )}
    </React.Fragment>
  );
}
