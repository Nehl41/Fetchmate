import './TrackerModalPage.css'
import React from "react";
import Rodal from "rodal";

import { useState } from "react";
import { Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Petcollar from '../../assets/Image/petCollarsample.jpg'

const prepsformodal = ({showModal , setShowModal}) => {
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
        visible={showModal}
        onClose={() => setShowModal(false)}
      >
        <Typography variant="h4" sx={{ fontFamily: "Exo" }}>
          Order a Tracker
        </Typography>
        <div>
          <div className="product">
            <div className="product__image position-relative">
              <div class="product__photo">
                <div class="photo-container">
                  <div class="photo-main">
                    <div class="controls">
                      <ShareIcon />
                      <FavoriteBorderIcon />
                    </div>
                    <img src={Petcollar} alt="Pet collar"></img>
                  </div>
                  {/* Photo Album */}
                  <div class="photo-album">
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                        alt="green apple"
                      ></img>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                        alt="half apple"
                      ></img>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                        alt="green apple"
                      ></img>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                        alt="apple top"
                      ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="product__info">
              <div className="title">
                <h1>Delicious Apples</h1>
                <h6>COD: 45999</h6>
              </div>
              <div className="price">
                <h2>Rs. 7.93</h2>
              </div>
              <div className="variant">
                <h3>SELECT A COLOR</h3>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                ></img>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                  alt="yellow apple"
                ></img>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                  alt="orange apple"
                ></img>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                  alt="red apple"
                ></img>
              </div>
              <div className="description">
                <h3>BENEFITS</h3>
                <ul>
                  <li>Apples are nutricious</li>
                  <li>Apples may be good for weight loss</li>
                  <li>Apples may be good for bone health</li>
                  <li>They're linked to a lowest risk of diabetes</li>
                </ul>
              </div>
              <button className="buy--btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </Rodal>
    );
}

export default prepsformodal;