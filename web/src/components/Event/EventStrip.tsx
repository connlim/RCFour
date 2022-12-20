import { Divider, Stack, Typography } from "@mui/material";
import { EventData } from "../../services/EventService";

export interface EventStripProps {
  event: EventData;
}

const EventStrip = ({ event }: EventStripProps) => {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="h6">{event.title}</Typography>
      <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
        <Typography variant="caption">
          Date: {new Date(parseInt(event.timestamp)).toDateString()}
        </Typography>
        <Typography variant="caption">By: {event.username}</Typography>
      </Stack>
      <Typography>{event.description}</Typography>
    </Stack>
  );
};

export default EventStrip;
