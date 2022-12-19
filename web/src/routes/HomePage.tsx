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
      />
    </Box>
    
  )
}

export default HomePage
