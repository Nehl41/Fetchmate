import PetCard from "../Card/PetCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { UploadFile } from "@mui/icons-material";

import AddPetModal from "../Modal/AddPetModal";

import "rodal/lib/rodal.css";
import "./AddPetSitter.css";
import { useEffect } from "react";

const AddPetSitter = () => {
  const [showModal, setShowModal] = useState(false);

  const petDetails=window.localStorage.getItem("MyPet")

  return (
    <div className="parent-bottom-container d-flex justify-content-center">
      <h2 style={{ textAlign: "center", color: "black" }}>Your Pets</h2>

      <div className="petcards d-flex justify-content-center">
        {/* on adding-pet */}
        <PetCard
          petImage={
            "https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?size=626&ext=jpg&ga=GA1.1.793567355.1673874082&semt=robertav1_2_sidr"
          }
          petName={""}
          petUniqueId={"Pet's Fetchmate unique id"}
        />

        <AddPetModal
          visible={showModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />

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
