import { Box } from "@mui/system";
import React from "react";
import { GeoMap } from "../components/Map/Map";

const HomePage = () => {
  return (
    <Box
      sx={{
        height: '80vh'
      }}
    >
      <GeoMap
        coords={[]}
        pinCoord={null}
        updatePin={(lat, long)=>{console.log(lat, long)}}
      />
    </Box>
    
  )
}

export default HomePage
