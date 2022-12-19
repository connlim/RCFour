import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../firebase/auth";

const SignInButton = () => {
  return (
    <Button
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
      onClick = {() => {
        signIn()}
    }

    >
      Sign In
    </Button>
  )
}

export default SignInButton
