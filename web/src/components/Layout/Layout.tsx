import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import { Box } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        overflowX: "hidden",
        boxSizing: "content-box",
      }}
    >
      <Nav />
      <main>{props.children}</main>
    </Box>
  )
}

export default Layout
