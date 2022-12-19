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
  const [geopoint, setGeopoint] = useState()

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

    // if(geopoint === undefined) {
    //   console.log("input lat long")
    //   return
    // }



    const sendEvent = async () => {

      // prepare data
      const data: EventCreationData = {
        user_id: uid,
        title: title,
        description: description,
        timestamp: Date.now().toString(),
        location: {
          lat: 12,
          lng: 12,
        },
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
        alignItems: "left",
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

      <Typography marginTop={"1rem"}>
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
          width: 200,
          alignSelf: "center",
          borderRadius: 100,
          borderColor: "black",
          marginTop: "1rem", 
        }}
      >
        Create Event
      </Button>

    </Box>
  )
}

export default EventCreation
