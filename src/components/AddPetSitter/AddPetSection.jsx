import PetCard from "../Card/PetCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { UploadFile } from "@mui/icons-material";

import AddPetModal from "../Modal/AddPetModal";

import DogGif from '../../assets/Image/DogFace.gif'
import CatGif from '../../assets/Image/CatFace.gif'

import "rodal/lib/rodal.css";
import "./AddPetSitter.css";
import { useEffect } from "react";
import axios from "axios";
import userData from "../../utils/getUserData";

const AddPetSitter = () => {
  const [showModal, setShowModal] = useState(false);
  const [myPets,setMyPets]=useState([])

  useEffect(()=>{
    getMyPets()
  },[])

  const getMyPets=async ()=>{
    const response=await axios({
      url:"http://localhost:3500/api/v1/pets/show-mypets",
      method:"POST",
      headers:{
        Authorization:`Bearer ${window.localStorage.getItem("token")}`
      },
      data:{id:userData.currentUSer._id}
    })
   setMyPets(response.data)
   console.log(myPets);
  }

  return (
    <div className="parent-bottom-container d-flex justify-content-center">
      <h2 style={{ textAlign: "center", color: "black" }}>Your Pets</h2>

      <div className="petcards d-flex justify-content-center">
        {/* on adding-pet */}
        {(myPets.length)?(
          myPets.map(myPet=>{
            return(
              <PetCard
          petImage={
            (myPet.petType=="Dog")?DogGif:CatGif
          }
          petName={myPet.name}
          petUniqueId={myPet._id}
        />
            )
          })
        ):(<PetCard
          petImage={
            "https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?size=626&ext=jpg&ga=GA1.1.793567355.1673874082&semt=robertav1_2_sidr"
          }
          petName={""}
          petUniqueId={"Pet's Fetchmate unique id"}
        />)          
        }


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
