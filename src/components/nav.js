import React from "react";
import { AppBar, Grid, Toolbar, Typography, Box } from "@mui/material";

const Nav = () => {
  return (
    <div>
      <AppBar elevation={0}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h3">Icon</Typography>
            </Grid>
            <Grid item>
              <Typography>Profile</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "3.5rem" }} />
    </div>
  );
};

export default Nav;
