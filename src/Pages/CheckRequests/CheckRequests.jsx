import {
  CCard,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from "@coreui/react";
import DogImage from "../../assets/Image/DogFace.gif";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const CheckRequest = () => {
  const currentUser = JSON.parse(
    window.localStorage.getItem("userData")
  ).currentUSer;
  const currentRequest = currentUser.currentRequests;
  console.log(`Cure${currentRequest}`);
  const [petData, setPetData] = useState({
    name: "Pet name",
    petType: "Pet Type",
  });
  const [requestStatus,setRequestStatus]=useState("")
  const [petParent, setPetParent] = useState({});

  useEffect(() => {
    getUserPets();
  }, []);

  const getUserPets = async () => {
    const response = await axios({
      url: "http://localhost:3500/api/v1/pets/show-one-pet",
      method: "POST",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      data: { petId: currentRequest.pet },
    });
    setPetData(response.data);
    console.log(response.data);
    const userResponse = await axios({
      url: "http://localhost:3500/api/v1/user/one-user",
      method: "POST",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      data: { userId: currentRequest.petParent },
    });
    setPetParent(userResponse.data);
    console.log(`User response ${userResponse.data}`);
  };

  return (
    <div
      className="checkRequest-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div className="request-detail-warapper">
        <CCard style={{ width: "18rem" }}>
          <CCardImage orientation="top" src={DogImage} />
          <CCardBody>
            <CCardTitle>{petData.name}</CCardTitle>
            <CCardText>
              Hey I am <h6 style={{ fontWeight: "900" }}>{petParent.name} </h6>{" "}
              Can you please take care of{" "}
              <h6 style={{ fontWeight: "900" }}>{petData.name}</h6> on {}
              here's my phone no{" "}
              <h6 style={{ fontWeight: "900" }}>{petParent.phone}</h6>
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>PET TYPE: {petData.petType}</CListGroupItem>
            <CListGroupItem>BREED: {petData.breed}</CListGroupItem>
            <CListGroupItem>DATE: 21/12/2001</CListGroupItem>
          </CListGroup>
          <CCardBody>
            {(currentRequest.status=="Pending")?<>
            <CCardLink
              onClick={async (e) => {
                await axios({
                  url: "http://localhost:3500/api/v1/user/accept-request",
                  method: "POST",
                  data:{id:JSON.parse(window.localStorage.getItem("userData")).currentUSer._id}
                  
                });
              }}
              style={{ color: "green",cursor:"pointer" }}
            >
              Accept
            </CCardLink>
            <CCardLink
              onClick={async (e) => {
                await axios({
                  url: "http://localhost:3500/api/v1/user/reject-request",
                  method: "POST",
                  data:{id:JSON.parse(window.localStorage.getItem("userData")).currentUSer._id}
                });
              }}
              style={{ color: "red",cursor:"pointer" }}
            >
              Reject
            </CCardLink>
            </>:<CCardLink style={{ color: "black" }}>
                {currentRequest.status}
              </CCardLink>}
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default CheckRequest;
