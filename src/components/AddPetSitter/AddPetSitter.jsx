import PetCard from "../Card/PetCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { UploadFile } from "@mui/icons-material";
import { Checkbox, Box, Grid, MenuItem, Button } from "@mui/material";
import {
  InputLabel,
  Select,
  FormControl,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import Rodal from "rodal";
import { MDBCardImage, MDBInput } from "mdb-react-ui-kit";
import CatFace from "../../assets/Image/CatFace.gif";
import DogFace from "../../assets/Image/DogFace.gif";
import DefaultPet from "../../assets/Image/defaultPet.gif";

import "rodal/lib/rodal.css";
import "./AddPetSitter.css";
import { useEffect } from "react";

const AddPetSitter = () => {
  const [showModal, setShowModal] = useState(false);
  const [formGif, setFormGif] = useState(DefaultPet);
  const [animalType, setAnimalType] = useState("Cat");

  const handleChange = (e) => {
    const currentContent = e.target.value;
    setAnimalType(currentContent);
    if (currentContent === "Dog") setFormGif(DogFace);
    else if (currentContent === "Cat") setFormGif(CatFace);
  };
  const getRandomAnimation = () => {
    const animationTypes = [
      "zoom",
      "fade",
      "flip",
      "door",
      "rotate",
      "slideUp",
      "slideDown",
      "slideLeft",
      "slideRight",
    ];

    const randomIndex = Math.floor(Math.random() * animationTypes.length);

    return animationTypes[randomIndex];
  };

  return (
    <div className="parent-bottom-container d-flex justify-content-center">
      <h2 style={{ textAlign: "center", color: "black" }}>Your Pets</h2>

      <div className="petcards d-flex justify-content-center">
        {/* on adding-pet */}
        <PetCard
          petImage={
            "https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?size=626&ext=jpg&ga=GA1.1.793567355.1673874082&semt=robertav1_2_sidr"
          }
          petName={"Pet Name"}
          petUniqueId={"Pet's Fetchmate unique id"}
        />

        <Rodal
          animation={getRandomAnimation()}
          customMaskStyles={{
            backgroundImage: "linear-gradient(to bottom right, grey, white)",
            opacity:"0.9"
          }}
          customStyles={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // overflow:"auto"
          }}
          height={700}
          width={700}
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
                    name="title"
                    label="e.g. Jackie Bruno Tommy"
                    fullWidth
                    size="small"
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
                    name="author"
                    label="e.g. GermanShepherd Pomeranian "
                    fullWidth
                    size="small"
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
                   Photo
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <input
                    class="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                  />
                </Grid>
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" sx={{ color: "#ff781f" }}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Rodal>

        {/* constent-add-new-card */}
        <div className="add-pet-btn-container">
          <button className="add-pet-btn" onClick={() => setShowModal(true)}>
            <AddCircleIcon
              sx={{ fontSize: 150, ":hover": { fontSize: 175 } }}
            />
            <h6>Add Your Furry Friend</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPetSitter;
