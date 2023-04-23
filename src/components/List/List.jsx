import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/material";

export default function AlignItemsList({
  serviceimage,
  servicetitle,
  servicesubtitle,
  servicediscription,
}) {
  const ListItemSx = {
    "&:hover": {
      transform: "scale(1.5)",
    },
    transition: "0.5s",
  };

  return (
    <List sx={{ width: "100%", maxWidth: 500 }}>
      <ListItem sx={ListItemSx} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={serviceimage} />
        </ListItemAvatar>

        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", color: "black", fontWeight: "500" }}
                variant="body1"
              >
                {servicesubtitle}
              </Typography>
              <br />
              {servicediscription}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
