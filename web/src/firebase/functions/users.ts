import { User } from "@firebase/auth";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { db } from "../init";
import { AppUser } from "../../types/AppUser";

export async function addUserIfNotExist(user: User): Promise<void> {
  setDoc(
    doc(db, "users", user.uid),
    {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    },
    { merge: true }
  );
}

export async function getUserById(uid: string): Promise<AppUser | null> {
  const docSnap = await getDoc(doc(db, "users", uid));
  if (docSnap.exists()) {
    const data = docSnap.data();
    return new AppUser(data.uid, data.name, data.email);
  } else {
    return null;
  }
}
