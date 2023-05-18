import React from "react";
import Rodal from "rodal";
import { useState } from "react";
import "./model.css";
import { Box, Grid, MenuItem, Button } from "@mui/material";
import {
  InputLabel,
  Select,
  FormControl,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";

import userData from "../../utils/getUserData";

import { MDBCardImage, MDBInput } from "mdb-react-ui-kit";
import CatFace from "../../assets/Image/CatFace.gif";
import DogFace from "../../assets/Image/DogFace.gif";
import DefaultPet from "../../assets/Image/defaultPet.gif";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const AddPetModal = ({ showModal, setShowModal }) => {
  const [formGif, setFormGif] = useState(DefaultPet);
  const [animalType, setAnimalType] = useState("Cat");
  const [petDetails, setPetDetails] = useState({});
  const [medical, setMedical] = useState({});
  
  const handleChange = (e) => {
    const currentContent = e.target.value;
    setAnimalType(currentContent);
    const currPet = { ...petDetails };
    currPet["petType"] = currentContent;
    currPet["parentId"] = userData.currentUSer._id;
    setPetDetails(currPet);

    if (currentContent === "Dog") setFormGif(DogFace);
    else if (currentContent === "Cat") setFormGif(CatFace);
  };
  const getRandomAnimation = () => {
    const animationTypes = [
      // "zoom",
      "fade",
      // "flip",
      // "door",
      // "rotate",
      // "slideUp",
      // "slideDown",
      // "slideLeft",
      // "slideRight",
    ];

    const randomIndex = Math.floor(Math.random() * animationTypes.length);

    return animationTypes[randomIndex];
  };

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const currPet = { ...petDetails };
    currPet["parentId"] = userData.currentUSer._id;
    currPet[e.target.getAttribute("name")] = value;
    setPetDetails(currPet);
    console.log(currPet);
  };

  return (
    <Rodal
      animation={getRandomAnimation()}
      customMaskStyles={{
        backgroundImage: "linear-gradient(to bottom right, grey, white)",
        opacity: "0.9",
      }}
      customStyles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "95vh",
        width: "60vw",
        overflow: "auto",
      }}
      visible={showModal}
      onClose={() => setShowModal(false)}
    >
      <Typography variant="h4">Add Your Pet</Typography>
      <MDBCardImage
        src={formGif}
        alt="Sample photo"
        className="modal-image-container rounded-start w-50 h-60 m-0"
        fluid
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        id="pet-Modal-form"
      >
        
        <Box sx={{ padding: 5 }}>
        <form onSubmit={async (e)=>{
          const formData=new FormData()
          formData.append("name",petDetails.name)
          formData.append("DOB",petDetails.birthDate.toString())
          formData.append("petType",petDetails.petType)
          formData.append("breed",petDetails.breed)
          formData.append("medical",petDetails.medical)
          formData.append("parentId",userData.currentUSer._id)
          const response=await axios({
            url:"https://fetchmatebackend.onrender.com/api/v1/pets/add-pet",
            method:"POST",
            headers:{
              "Content-Type":"multipart/form-data"
            },
            data:formData
          })
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Pet Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="title"
                name="name"
                label="e.g. Jackie Bruno Tommy"
                fullWidth
                size="small"
                onChange={inputChangeHandler}
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Pet Type
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Select Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="petType"
                  value={animalType}
                  label=""
                  onChange={handleChange}
                >
                  <MenuItem value={"Dog"}>I'm A Doggie</MenuItem>
                  <MenuItem value={"Cat"}>I'm A Pussy</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Breed
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="breed"
                label="e.g. GermanShepherd Pomeranian "
                fullWidth
                size="small"
                onChange={inputChangeHandler}
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                DOB
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MDBInput
                wrapperClass="mb-3"
                label="Birthday"
                size="md"
                id="form4"
                name="birthDate"
                onChange={inputChangeHandler}
                type="date"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Medical
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                name="medical"
                onChange={(e) => {
                  setMedical(e.target.files[0]);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                sx={{ color: "#ff781f" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
          </form>
        </Box>
        
      </div>
    </Rodal>
  );
};

export default AddPetModal;
