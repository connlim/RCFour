import { doc, collection, addDoc, setDoc, getDoc, getDocs, GeoPoint, serverTimestamp } from "@firebase/firestore";

import { db } from "../../init";
import { EventCreationData, EventData } from "../../../services/EventService";

export async function getAllEvents() {
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
} 

export async function getEventById(id: string) {
  const eventRef = doc(db, "events", id);
  const eventSnap = await getDoc(eventRef);
  
  if (eventSnap.exists()) {
    console.log("Document data:", eventSnap.data());
  } else {
    console.log("No such document!", id);
  }
}

export async function addEvent() {
  try {
    const newEvent = await addDoc(collection(db, "events"), {
      title: "Title",
      description: "This is an event",
      organiser: 1815,
      location: new GeoPoint(1.800, 1000),
      timestamp: serverTimestamp(),
      attendees: [],
      attendees_names: [],
    });
    console.log("Add new event with ID: ", newEvent.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}