import { Grid, TextField, Typography } from "@mui/material";

import "./UserProfile.css";

import ManHi from '../../assets/Image/manHi.gif'
import WomanHi from '../../assets/Image/womanHi.gif'
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = () => {
  const [currentUser,setCurrentUser]=useState({name:"Default User"})
  

  useEffect(()=>{
    // if(window.localStorage.getItem("userData")){
    //   console.log(window.localStorage.getItem("userData"));
      setCurrentUser(JSON.parse(window.localStorage.getItem("userData")).currentUSer)
      console.log(currentUser);
    // }
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
              defaultValue={currentUser.name}
              value={currentUser.name.split(" ")[0]}
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
              value={currentUser.name.split(" ")[1]}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Birthday"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={currentUser.birthDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Gender"
              InputProps={{
                readOnly: true,
              }}
             value={currentUser.sex}
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
             value={currentUser.email}
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
              value={currentUser.phone}
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
              value={currentUser.city}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="State"
              value={currentUser.state}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="Country"
             value={currentUser.country}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="Pin Code"
              value={"452005"}
            />
          </Grid>
        </Grid>
      </div>
      <div className="profile-information">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={(currentUser.sex=="Female")?WomanHi:ManHi} alt="someimage"/>
          <Typography>{currentUser.name}</Typography>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
