import './TrackerModalPage.css'
import React from "react";
import Rodal from "rodal";

import { useState } from "react";
import { Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Importing Images
import brownCollar from '../../assets/Image/brownCollar.png'
import blueCollar from '../../assets/Image/blueCollar.png'
import darkBrownCollar from '../../assets/Image/darkBrownCollar.png'
import purpleCollar from '../../assets/Image/purpleCollar.png'

const Prepsformodal = ({showModal , setShowModal}) => {
  const [currentImage,setCurrentImage]=useState(purpleCollar)

  const handleImageChange=(e)=>{
    const currentElement=e.target.getAttribute('alt')
    switch (currentElement) {
      case "purple":
        setCurrentImage(purpleCollar)
        break;
      case "blue":
        setCurrentImage(blueCollar)
        break;
      case "brown":
        setCurrentImage(brownCollar)
        break;
      case "darkBrown":
        setCurrentImage(darkBrownCollar)
        break;
      default:
        break;
    }
  }

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
                    <img src={currentImage} alt="Pet collar"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="product__info">
              <div className="title">
                <h1>GPS Collar</h1>
                <h6>COD: 45999</h6>
              </div>
              <div className="price">
                <h2>Rs. 999</h2>
              </div>
              <div className="variant">
                <h3>SELECT A COLOR</h3>
                <img
                  src={purpleCollar}
                  alt="purple"
                  onClick={handleImageChange}
                ></img>
                <img
                  src={darkBrownCollar}
                  alt="darkBrown"
                  onClick={handleImageChange}
                ></img>
                <img
                  src={blueCollar}
                  alt="blue"
                  onClick={handleImageChange}
                ></img>
                <img
                  src={brownCollar}
                  alt="brown"
                  onClick={handleImageChange}
                ></img>
              </div>
              <div className="description">
                <h3>Features</h3>
                <ul>
                  <li>Get Pet Location</li>
                  <li>Easy Setup</li>
                  <li>Suits all Fur Types</li>
                  <li>Already Linked With Fetchmate</li>
                </ul>
              </div>
              <button className="buy--btn">Buy Now</button>
            </div>
          </div>
        </div>
      </Rodal>
    );
}

export default Prepsformodal;