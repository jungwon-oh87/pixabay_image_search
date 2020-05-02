import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import "./nav.css";

const Nav = () => {
  return (
    <AppBar position="fixed">
      <Typography variant="h6" align="center">
        PixaBay Image Search
      </Typography>
    </AppBar>
  );
};

export default Nav;
