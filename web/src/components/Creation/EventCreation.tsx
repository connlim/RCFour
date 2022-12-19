import React, { useState } from "react";
import { 
  Box, Button, Input, TextField, Typography,
} from "@mui/material";

import EventService, { EventCreationData } from "../../services/EventService"
import { auth } from "../../firebase/init";
import { GeoPoint } from "firebase/firestore";


const EventCreation = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleTitleChange = (event: any) => {
    const target = event.target
    setTitle(target.value)
  }

  const handleDescriptionChange = (event: any) => {
    const target = event.target
    setDescription(target.value)
  }

  const handleEventSubmit = () => {
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

    <Box
      sx={{
        display: "flex",
        maxWidth: "1200px",
        width: "80%",
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        border: 2,


      }}

    >

      <Typography
        sx={{
          alignSelf: "flex-start"
        }}
      >
        Title
      </Typography>
      <TextField
        onChange={handleTitleChange}
        sx={{
          width: "100%"
        }}
        />

      <Typography>
        Description
      </Typography>
      <TextField 
        onChange={handleDescriptionChange}
        />

      <Button
        onClick={handleEventSubmit}
        // variant="outlined"
        sx={{
          border: 1,
          borderRadius: "10%",
          borderColor: "black"
        }}
      >
        Create Event
      </Button>


    </Box>
  )
}

export default EventCreation
