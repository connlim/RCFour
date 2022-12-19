import { Box } from "@mui/system";
import React from "react";
import EventList from "../components/Event/EventList";
import { GeoMap } from "../components/Map/Map";

const HomePage = () => {
  return (
    <div>
      <Box
        sx={{
          height: "80vh",
        }}
      >
        <GeoMap
          coords={[]}
          pinCoord={null}
          updatePin={(lat, long) => {
            console.log(lat, long);
          }}
        />
      </Box>
      <EventList></EventList>
    </div>
  );
};

export default HomePage;
