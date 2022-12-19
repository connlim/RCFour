import { Box } from "@mui/material";
import React from "react";
import EventCreation from "./EventCreation";
import QuestCreation from "./QuestCreation";

const Creation = () => {
  return (
    <Box
      sx={{
        marginBottom: "2rem"
      }}
    >
      <EventCreation />
      <QuestCreation />
    </Box>
  )
}

export default Creation
