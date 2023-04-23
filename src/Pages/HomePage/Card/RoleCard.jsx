import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ParentImg from "../../../assets/Image/CardParent1.jpg";
import LoverImg from "../../../assets/Image/CardLover.jpg";

function RoleCard() {
  return (
    <div className="container spacing-2">
      <Card sx={{ backgroundColor: "#B2AB99", maxWidth: 345, color: "white" }}>
        <CardMedia
          height={227}
          component="img"
          image={ParentImg}
          title="PetParent"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            I'm Pet Parent
          </Typography>
          <Typography variant="body2">
            Find a fun human match for your four-legged family member.
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            href="/parent"
            variant="contained"
            sx={{
              backgroundColor: "#4C4637",
              "&:hover": {
                backgroundColor: "#877444",
                color: "white",
                transform: "scale(1.1)",
              },
              transition: "0.3s",
            }}
          >
            Tell me more
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ backgroundColor: "#B2AB99", maxWidth: 345, color: "white" }}>
        <CardMedia component="img" image={LoverImg} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            I'm a Pet Lover
          </Typography>
          <Typography variant="body2">
            Connect with a new furry buddy and have some tail-wagging
            adventures.
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            href="/pet-lover"
            variant="contained"
            sx={{
              backgroundColor: "#4C4637",
              "&:hover": {
                backgroundColor: "#877444",
                color: "white",
                transform: "scale(1.1)",
              },
              transition: "0.3s",
            }}
          >
            Tell me more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RoleCard;
