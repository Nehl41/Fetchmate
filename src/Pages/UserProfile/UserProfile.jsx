import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./UserProfile.css";
import { Instagram, MailOutlineSharp, Send, Verified, VerifiedOutlined } from "@mui/icons-material";
import { useState } from "react";
import Rodal from 'rodal'

const UserProfile = () => {

    const isEmailVerified=false;

    const [showModal,setShowModal]=useState(false)

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
              defaultValue={"Swayam"}
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
              defaultValue={"Swayam"}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
          
          label="Birthday"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={"Swayam"}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
         
              variant="outlined"
              label="Gender"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={"Swayam"}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
          fullWidth
              variant="outlined"
              label="Email"
              InputProps={{
                readOnly: true,
                endAdornment:(
                    <InputAdornment position="end">
                        {isEmailVerified?<Verified/>: <div onClick={(e)=>{
                            setShowModal(true)
                            setTimeout(()=>setShowModal(false),2000)
                        }} className="email-verifier">
                        <MailOutlineSharp sx={{"&:hover":{
                            transform:"scale(1.1)"
                        },"&:active":{
                            transform:"scale(0.8)"
                        }}} />
                        <Rodal customStyles={{
                            padding:"2rem",
                            minHeight:"5vh"
                        }} visible={showModal} onClose={()=>{
                            setShowModal(false)
                            console.log(`Modal Close:${showModal}`);
                            
                        }}>
                        <Typography variant="h5">Verification Mail Has Been Sent!</Typography>
                        <Send sx={{fill:"lightgreen",height:"5vh"}}/>
                        </Rodal>
                        </div> }
                    </InputAdornment>
                )
              }}
              defaultValue={"Swayam"}
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
              defaultValue={"Swayam"}
            />
          </Grid>
        </Grid>
        <h3 style={{ marginBottom: "2rem",marginTop:"1.5rem" }}>Address</h3>
        <Grid container spacing={4}>
              <Grid item xs={6}>
              <TextField variant="outlined" InputProps={{
                readOnly:true
              }}  label="City" defaultValue={"Indore"} />
              </Grid>
              <Grid item xs={6}>
              <TextField variant="outlined" InputProps={{
                readOnly:true
              }}  label="State" defaultValue={"Madhya Pradesh"} />
              </Grid>
              <Grid item xs={6}>
              <TextField variant="outlined" InputProps={{
                readOnly:true
              }}  label="Country" defaultValue={"India"} />
              </Grid>
              <Grid item xs={6}>
              <TextField variant="outlined" InputProps={{
                readOnly:true
              }}  label="Pin Code" defaultValue={"452005"} />
              </Grid>
        </Grid>
      </div>
      <div className="profile-information">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" alt="someimage"/>
        </div>
        <div class="team-content">
          <h3 class="name">Swayam Prajapat</h3>
          <h4 class="title">Pet Sitter</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" ><Instagram/></a></li>
          
        </ul>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;
