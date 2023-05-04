import './Payment.css'
import React from "react";
import Rodal from "rodal";
import { useState } from 'react';


const Paymentmodal = ({showpaymentModal , setpaymentShowModal}) => {
  const [paymentMode, setPaymentMode] = useState('UPI'); // Default to UPI mode
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [upiMode, setUpiMode] = useState('PhonePe'); // Default to PhonePe UPI mode

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleUpiModeChange = (e) => {
    setUpiMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

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

<form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMode"
            value="UPI"
            checked={paymentMode === 'UPI'}
            onChange={handlePaymentModeChange}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="paymentMode"
            value="Card"
            checked={paymentMode === 'Card'}
            onChange={handlePaymentModeChange}
          />
          Card
        </label>
      </div>
      {paymentMode === 'Card' && (
        <div>
          <label>
            Card Type:
            <select value={cardType} onChange={handleCardTypeChange}>
              <option value=""></option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
            </select>
          </label>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
          </label>
        </div>
      )}
      {paymentMode === 'UPI' && (
        <div>
          <label>
            Mobile Number:
            <input type="text" value={mobileNumber} onChange={handleMobileNumberChange} />
          </label>
          <label>
            UPI Mode:
            <select value={upiMode} onChange={handleUpiModeChange}>
              <option value="PhonePe">PhonePe</option>
              <option value="Paytm">Paytm</option>
              <option value="GooglePay">Google Pay</option>
            </select>
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>

          </Rodal>
    );
}

export default Paymentmodal;