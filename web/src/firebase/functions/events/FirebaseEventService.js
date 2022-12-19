import { doc, collection, addDoc, setDoc } from "firebase/firestore";

import { db } from "../../init";

export function getAllEvents() {

} 

export function getEventById() {

}

export async function addEvent() {
  try {
    const newEvent = await addDoc(collection(db, "events"), {
      title: "Title",
      description: "This is an event",
      organiser: 1815,
      location: new firebase.firestore.GeoPoint(1.800, 1000),
      timestamp: new firebase.firestore.FieldValue.serverTimestamp(),
      attendees: [],
      attendees_names: [],
    });
    console.log("Add new event with ID: ", newEvent.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}