import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./UserProfile.css";

import {
  Instagram,
  MailOutlineSharp,
  Send,
  Verified,
  VerifiedOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Rodal from "rodal";
import axios from "axios";
import { useEffect } from "react";

const UserProfile = () => {
  const [userData,setUserData]=useState({currentUSer:{name:"Swayam"}})
  const [showModal, setShowModal] = useState(false);
  const isEmailVerified = false;
  const currentUser=userData.currentUSer;
  const fullname = userData.currentUSer.name;
  const firstName = fullname.split(" ")[0];
  const lastName=fullname.split(" ")[1];
  

  useEffect(()=>{
    if(window.localStorage.getItem("userData")){
      console.log(window.localStorage.getItem("userData"));
      setUserData(JSON.parse(window.localStorage.getItem("userData")))
    }
  },[])

  return (
    <div className="profile-container">
      <div className="general-info">
        <h3 style={{ marginBottom: "2rem" }}>General Information</h3>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Birthday"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={currentUser.birthDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Gender"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={currentUser.sex}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              
              InputProps={{
                readOnly: true,
              }}
              defaultValue={currentUser.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={currentUser.phone}
            />
          </Grid>
        </Grid>
        <h3 style={{ marginBottom: "2rem", marginTop: "1.5rem" }}>Address</h3>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="City"
              defaultValue={currentUser.city}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="State"
              defaultValue={"Madhya Pradesh"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="Country"
              defaultValue={currentUser.country}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="Pin Code"
              defaultValue={"452005"}
            />
          </Grid>
        </Grid>
      </div>
      <div className="profile-information">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" alt="someimage"/>
          <Typography>{currentUser.name}</Typography>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
