import React from "react";

import fmlogo from '../../assets/Image/logo-color.png';

import './login.css';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  

function Login(){
    return(
       <MDBContainer className="bg-#AE775B my-4 d-flex justify-content-center align-items-center">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://img.freepik.com/premium-vector/boy-pet-love-kid-dog-vector-illustration-children-puppy-friend-pup-animal-owner-happy-child-cartoon-vector-illustration-little-dogs-playing-image-isolated-white-background_81894-5934.jpg?w=740' alt="login form" className='rounded-start h-100 w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='align-self-center'>
                <img className="fmlogo" src={fmlogo} alt='fatlogo'></img>
              </div>

              <h5 className="align-self-center fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="align-self-center mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="align-self-center small text-muted" href="#!">Forgot password?</a>
              <p className="align-self-center mb-5 pb-lg-2" style={{color: '#4C4637'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    );
}

export default Login;