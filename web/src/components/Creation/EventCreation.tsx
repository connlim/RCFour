import React, { useState } from "react";
import { 
  Box,
} from "@mui/material";

import EventService, { EventCreationData } from "../../services/EventService"
import { auth } from "../../firebase/init";
import { GeoPoint } from "firebase/firestore";


const EventCreation = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const HandleEventSubmit = () => {
    const eventService = new EventService()

    const uid = auth.currentUser?.uid;
    if(uid === undefined) {
      return;
    }

    const sendEvent = async () => {
      
      // prepare data
      const data: EventCreationData = {
        user_id: uid,
        title: title,
        description: description,
        timestamp: Date.now().toString(),
        location: {
          lat: -123,
          lng: 123,
        }
      }

      try {
        await eventService.createEvent(data);
        console.log("event created")
      } catch (error) {
        console.log(error);
      }
    }

    sendEvent()
  }

  return (
    <div>
      Event Creation
    </div>
  )
}

export default EventCreation
