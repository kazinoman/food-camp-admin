import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Dashboard from "./../pages/Dashboard";

const SideNavList = () => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple
            sx={{ ":hover": { background: "transparent" } }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default SideNavList;
