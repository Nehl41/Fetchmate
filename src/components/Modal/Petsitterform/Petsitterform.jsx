import "./Petsitterfrom.css";
import React from "react";
import Rodal from "rodal";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect } from "react";
import axios from "axios";

const Petsitterform = ({ showsitterModal, setsitterShowModal }) => {
  const [ownerName, setOwnerName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [datesRequested, setDatesRequested] = useState("");
  const [petId, setPetId] = useState("");
  const [petSitterCode,setPetSitterCode]=useState("")

  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    const response = await axios({
      url: "http://localhost:3500/api/v1/pets/show-mypets",
      method: "POST",
      data: {
        id: JSON.parse(window.localStorage.getItem("userData")).currentUSer._id,
      },
    });
    setMyPets(response.data);
  };

  const handlePetTypeChange = (e) => {
    const { value, checked } = e.target;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: "http://localhost:3500/api/v1/user/submit-request",
      method: "POST",
      headers:{
        Authorization:`Bearer ${window.localStorage.getItem("token")}`
      },
      data: {
        parentId: JSON.parse(window.localStorage.getItem("userData"))
          .currentUSer._id,
        pet:petId,
        petSitterCode
      },
    });
  };
  return (
    <Rodal
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
      visible={showsitterModal}
      onClose={() => setsitterShowModal(false)}
    >
      <h1>Book a sitter</h1>

      <div className="d-flex"></div>

      {/* Sitter Form */}
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <label htmlFor="ownerName">Pet Owner's Name:</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />

        <label htmlFor="contactInfo" className="margin-left-2">
          Phone Number:
        </label>
        <input
          type="text"
          id="contactInfo"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <label htmlFor="dateRequested">Date Requested:</label>
        <input
          type="date"
          id="dateRequested"
          value={datesRequested}
          onChange={(e) => setDatesRequested(e.target.value)}
        />
        <label htmlFor="pets">Select Pet:</label>
        <select name="pets" id="pets" onChange={(e)=>{
          console.log(`Selected Pet:${e.target.value}`);
    setPetId(e.target.value)
        }}>
          {myPets.map((currentPet) => {

            return <option value={currentPet._id}>{currentPet.name}</option>;
          })}
        </select>
        <label htmlFor="petSitterCode">Pet Sitter Code:</label>
        <input type="text" onChange={(e)=>{setPetSitterCode(e.target.value)}} name="petSitterCode" id="petSitterCode" />
        <button type="submit">Submit</button>
      </form>

      
    </Rodal>
  );
};

export default Petsitterform;
