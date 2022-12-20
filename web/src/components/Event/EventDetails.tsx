import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../firebase/functions/events/FirebaseEventService";
import { EventData } from "../../services/EventService";

export default function EventDetails(): JSX.Element {
  const [event, setEvent] = useState<EventData>();
  let { eventId } = useParams();

  console.log(eventId);

  useEffect(() => {
    if (eventId != null && eventId !== "") {
      getEventById(eventId).then((eventData) => {
        if (eventData != null) {
          setEvent(eventData);
        }
      });
    }
  }, [eventId]);

  return event != null ? (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card variant="outlined" sx={{ padding: 10 }}>
          <CardContent>
            <Stack direction="column" spacing={1}>
              <Typography variant="h1">{event.title}</Typography>
              <Typography sx={{ mb: 2 }} color="text.secondary">
                Date: {new Date(parseInt(event.timestamp)).toDateString()}
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.secondary">
                By: {event.username}
              </Typography>
              <br></br>
              <Typography>{event.description}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <div>Event not found</div>
  );
}
