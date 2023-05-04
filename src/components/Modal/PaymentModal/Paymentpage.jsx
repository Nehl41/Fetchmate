import './Payment.css'
import React from "react";
import Rodal from "rodal";
import { useState } from 'react';


const paymentmodal = ({showpaymentModal , setpaymentShowModal}) => {
   return(
        <Rodal customMaskStyles={{
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
          visible={showpaymentModal}
          onClose={() => setpaymentShowModal(false)}>
          </Rodal>
    );
}

export default paymentmodal;