import React, { useState } from "react";
import { 
  Box, Button, Grid, Input, TextField, Typography,
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

  const handleLocationChange = (event: any) => {
    const target = event.target
    setLocation(target.value);
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
        gap: "1rem",
      }}
    >

      <Box>

      <Typography
        sx={{
          alignSelf: "flex-start",
          fontFamily:"Roboto",
          fontSize: "18px",
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
      </Box>

        <Box>

      <Typography 
        sx={{
          alignSelf: "flex-start",
          fontFamily:"Roboto",
          fontSize: "18px",
        }}
      >
        Description
      </Typography>

      <TextField 
        onChange={handleDescriptionChange}
          multiline
          minRows={4}
        sx={{
          width: "100%",
        }}
        />

      <Button
        onClick={handleEventSubmit}
        sx={{
          border: 1,
          width: 200,
          alignSelf: "center",
          // borderRadius: 100,
          borderColor: "black",
          marginTop: "1rem", 
          color: "black",
          borderRadius: "0",
          marginLeft: "1rem",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "600",
          letterSpacing: "1px"

        }}
      >
        Create Event
      </Button>

    </Box>
  )
}

export default EventCreation
