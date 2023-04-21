import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import lovegif from "../../assets/Image/petlover.gif";
import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";


const Signup = () => {
  const defaultInputs = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: ()=> Date.now(),
    password: "",
    city: "",
    state: "",
    country: 0,
    phone: 0,
    role: "PetLover",
    sex: "",
  };
  let navigate=useNavigate()
  const [formError, setFormError] = useState("JOIN US");
  const [user, setUser] = useState(defaultInputs);

  const inputChangeHandler = (event) => {
    const currentValue = event.target.value;
    const currUser = { ...user };
    currUser[event.target.getAttribute("name")] = currentValue;
    setUser(currUser);
  };

  return (
    <MDBContainer fluid className="w-75">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard id="gif-bg" className="mt-0">
            <MDBRow className="g-0">
              <MDBCol
                md="6"
                className="d-none d-md-block d-flex justify-content-center text-center  "
              >
                <MDBCardImage
                  src={lovegif}
                  alt="Sample photo"
                  className="rounded-start"
                  fluid
                />
              </MDBCol>

              <MDBCol md="6 ">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center ">
                  <h3 className="d-flex justify-content-center mb-3 text-uppercase fw-bold">
                    {formError}
                  </h3>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        name="firstName"
                        value={user.firstName}
                        size="md"
                        id="name1"
                        type="text"
                        required
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        size="md"
                        name="lastName"
                        value={user.lastName}
                        id="name2"
                        type="text"
                        required
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email ID"
                    size="md"
                    name="email"
                    id="form3"
                    type="email"
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <MDBInput
                    wrapperClass="mb-3"
                    label="Birthday"
                    size="md"
                    id="form4"
                    name="birthDate"
                    type="date"
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <MDBRow>
                    <MDBCol md="6">
                      <InputLabel id="demo-select-small">Role</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="form5"
                        label="Age"
                        value={user.role}
                        sx={{ width: 195, height: 40, marginBottom: 2 }}
                        name="role"
                        onChange={(e) => {
                          e.preventDefault();
                          const currUser = { ...user };
                          currUser.role = e.target.value;
                          setUser(currUser);
                        }}
                      >
                        <MenuItem value={"PetParent"}>Pet Parent</MenuItem>
                        <MenuItem value={"PetLover"}>Pet Lover</MenuItem>
                        <MenuItem value={"Both"}>
                          Pet Parent & can sit one
                        </MenuItem>
                      </Select>
                    </MDBCol>

                    <MDBCol md="6">
                      <InputLabel id="demo-select-small">Gender</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="form6"
                        label="Age"
                        name="sex"
                        value={user.sex}
                        sx={{ width: 195, height: 40, marginBottom: 2 }}
                        onChange={(e) => {
                          e.preventDefault();
                          const currUser = { ...user };
                          currUser.sex = e.target.value;
                          setUser(currUser);
                        }}
                      >
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Other"}>Others</MenuItem>
                      </Select>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="City"
                        size="md"
                        name="city"
                        id="form7"
                        type="text"
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="State"
                        name="state"
                        size="md"
                        id="form8"
                        type="text"
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Country"
                    size="md"
                    name="country"
                    id="form9"
                    type="text"
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone"
                    size="md"
                    id="form10"
                    name="phone"
                    type="text"
                    inputMode="numeric"
                    onChange={(e) => inputChangeHandler(e)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="md"
                    id="form5"
                    name="password"
                    type="password"
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <div className="d-flex justify-content-center">
                    <MDBBtn
                      color="light"
                      size="md"
                      onClick={(e) => {
                        setUser(defaultInputs);
                      }}
                    >
                      Reset all
                    </MDBBtn>
                    <MDBBtn
                      className="ms-2"
                      color="warning"
                      size="md"
                      onClick={(e) => {
                        console.log("Button Clicked!");
                        axios({
                          method: "POST",
                          url: "http://localhost:3500/api/v1/user/add",
                          data: user,
                        })
                          .then((response) =>
                            navigate('/login')
                          )
                          .catch((err) => setFormError(err.response.data.message));
                      }}
                    >
                      Submit form
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
