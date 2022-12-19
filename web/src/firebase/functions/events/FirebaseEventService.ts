import { doc, collection, addDoc, setDoc, getDoc, getDocs, GeoPoint, serverTimestamp } from "@firebase/firestore";

import { db } from "../../init";
import { EventCreationData, EventData, Geopoint } from "../../../services/EventService";

export async function getAllEvents() {
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
} 

export async function getEventById(id: string) {
  const eventRef = doc(db, "events", id);
  const eventSnap = await getDoc(eventRef);
  
  if (!eventSnap.exists()) {
    console.log("No such document!", id);
  } else {
    const data = eventSnap.data();
    // console.log("Document data:", data);
    // const result: EventData = {
    //   event_id: id,
    //   user_id: data.organiser,
    //   title: data.title,
    //   description: data.description,
    //   timestamp: data.timestamp,
    //   location: GeoPoint(data.location.lat, data.location.lng);
    //   attendees_ids: data.attendees,
    //   attendees_names: data.attendees_names,
    // };
    // return result;
  }
}

export async function addEvent(data: EventCreationData) {
  try {
    const newEvent = await addDoc(collection(db, "events"), {
      title: data.title,
      description: data.description,
      organiser: data.user_id,
      location: new GeoPoint(data.location.lat, data.location.lng),
      timestamp: data.timestamp,
      attendees: [],
      attendees_names: [],
    });
    console.log("Add new event with ID: ", newEvent.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}