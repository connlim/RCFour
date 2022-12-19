import { User } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../init";

export async function addUserIfNotExist(user: User) {
  setDoc(
    doc(db, "users", user.uid),
    {
      name: user.displayName,
      email: user.email,
    },
    { merge: true }
  );
}
