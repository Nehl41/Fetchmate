import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import lovegif from '../../assets/Image/petlover.gif'
import './Signup.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
  }
from 'mdb-react-ui-kit';

const Signup = () => {
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
                      Join Us
                    </h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First Name"
                          size="md"
                          id="form1"
                          type="text"
                          required
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last Name"
                          size="md"
                          id="form2"
                          type="text"
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email ID"
                      size="md"
                      id="form6"
                      type="email"
                    />
  
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Birthday"
                      size="md"
                      id="form3"
                      type="date"
                    />

                    <MDBRow>
                      <MDBCol md="6">
                        
                    <InputLabel id="demo-select-small">Role</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Age"
                      sx={{width: 195 , height: 40 , marginBottom: 2 }}
                    >
                      <MenuItem value={10}>Pet Parent</MenuItem>
                      <MenuItem value={20}>Pet Lover</MenuItem>
                      <MenuItem value={30}>Pet Parent & can sit one</MenuItem>
                    </Select>
                      </MDBCol>


                      <MDBCol md="6">
                    <InputLabel id="demo-select-small">Gender</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Age"
                      sx={{width: 195 , height: 40 , marginBottom: 2 }}
                    >
                      <MenuItem value={10}>Female</MenuItem>
                      <MenuItem value={20}>Male</MenuItem>
                      <MenuItem value={30}>More option</MenuItem>
                    </Select>

                    
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="City"
                          size="md"
                          id="form4"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="State"
                          size="md"
                          id="form4"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Country"
                      size="md"
                      id="form4"
                      type="text"
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Pincode"
                      size="md"
                      id="form4"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="md"
                      id="form5"
                      type="password"
                    />

                    <div className="d-flex justify-content-center">
                      <MDBBtn color="light" size="md">
                        Reset all
                      </MDBBtn>
                      <MDBBtn className="ms-2" color="warning" size="md" type="submit">
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
}

export default Signup;


