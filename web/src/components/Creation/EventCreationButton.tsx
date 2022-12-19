import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const EventCreationButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate('/create')
      }}
      sx={{
        color: "white",
        border: 2,
        borderColor: "white",
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
  )
}

export default EventCreationButton
