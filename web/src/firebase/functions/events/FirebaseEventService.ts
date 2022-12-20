import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  GeoPoint,
} from "@firebase/firestore";

import { db } from "../../init";
import { EventCreationData, EventData, Geopoint } from "../../../services/EventService";
import { getUserById } from "../users";

const eventsCollection: string = "events";

export async function getAllEvents() {
  const querySnapshot = await getDocs(collection(db, eventsCollection));

  const result: EventData[] = [];

  for (const doc of querySnapshot.docs) {
    const id: string = doc.id;
    const data = doc.data();
    console.log(`${doc.id} => ${doc.data().location.latitude}`);

    const loc: Geopoint = {
      lat: data.location.latitude, // Can be undefined
      lng: data.location.longitude, // Can be undefined
    };

    const user = await getUserById(data.organiser);
    const username = user?.name || "Unknown";
    const profile_url = user?.profile || "";

    const event: EventData = {
      event_id: id,
      user_id: data.organiser,
      username,
      profile_url,
      title: data.title,
      description: data.description,
      timestamp: data.timestamp,
      location: loc,
      attendees_ids: data.attendees,
      attendees_names: data.attendees_names,
    };

    result.push(event);
  }

  return result;
}

export async function getEventById(id: string) {
  const eventRef = doc(db, eventsCollection, id);
  const eventSnap = await getDoc(eventRef);

  if (!eventSnap.exists()) {
    console.log("No such document!", id);
  } else {
    const data = eventSnap.data();
    console.log("Document data:", data);

    const loc: Geopoint = {
      lat: data.location.latitude, // Can be undefined
      lng: data.location.longitude, // Can be undefined
    };

    const user = await getUserById(data.organiser);
    const username = user?.name || "Unknown";
    const profile_url = user?.profile || "";

    const result: EventData = {
      event_id: id,
      user_id: data.organiser,
      username,
      profile_url,
      title: data.title,
      description: data.description,
      timestamp: data.timestamp,
      location: loc,
      attendees_ids: data.attendees,
      attendees_names: data.attendees_names,
    };

    return result;
  }
}

export async function addEvent(data: EventCreationData) {
  try {
    const newEvent = await addDoc(collection(db, eventsCollection), {
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
    console.error("Error adding event: ", e);
  }
}

export async function updateEvent(data: EventData) {
  try {
    const newEvent = await setDoc(doc(db, eventsCollection, data.event_id), {
      title: data.title,
      description: data.description,
      organiser: data.user_id,
      location: new GeoPoint(data.location.lat, data.location.lng),
      timestamp: data.timestamp,
      attendees: data.attendees_ids,
      attendees_names: data.attendees_names,
    });
    console.log("Updated event with ID: ", data.event_id);
  } catch (e) {
    console.log("Error updating event: ", data.event_id);
  }
}

export async function deleteEvent(id: string) {
  try {
    await deleteDoc(doc(db, eventsCollection, id));
    console.log("Successfully deleted event: ", id);
  } catch (e) {
    console.log("Error deleting event: ", id);
  }
}
