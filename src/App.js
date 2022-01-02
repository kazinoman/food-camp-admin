import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

import "./App.css";
import theme from "./components/theme";
import PageRoutes from "./pages/routes";
import Nav from "./components/nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Grid container>
        {/* Menu item  */}
        <Grid item xs={2}>
          <h4>List item</h4>
        </Grid>
        {/* Main page information */}
        <Grid item xs={10}>
          <PageRoutes />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
