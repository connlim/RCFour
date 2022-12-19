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
  const [lat, setLat] = useState(-123)
  const [lng, setLng] = useState(123)
  const [location, setLocation] = useState("")

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

    const sendEvent = async () => {

      // prepare data
      const data: EventCreationData = {
        user_id: uid,
        title: title,
        description: description,
        timestamp: Date.now().toString(),
        location: {
          lat: lat,
          lng: lng,
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
        justifyContent: "space-between"
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
        sx={{
          width: "100%"
        }}
        />

      <Typography>
        Location
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            value={location}
            onChange={handleLocationChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button>
            Search Location
          </Button>
        </Grid>
      </Grid>
        
      

      <Button
        onClick={handleEventSubmit}
        sx={{
          borderWidth: "1px",
          borderRadius: "50%",
          borderColor: "black",

        }}
      >
        Create Event
      </Button>


    </Box>
  )
}

export default EventCreation
