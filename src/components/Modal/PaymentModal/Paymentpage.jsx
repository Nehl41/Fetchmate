import './Payment.css'
import React from "react";
import Rodal from "rodal";
import { useState } from 'react';
// import PaymentCard from './cardPayment';


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
       visible={showpaymentModal}
       onClose={() => setpaymentShowModal(false)}
     >
       <h3>Make a Payment</h3>

       <div className="card-line d-flex flex-row">
         <img
           src="data:image/png;base64,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"
           alt="mastercard"
         ></img>
         <img
           src="data:image/png;base64,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"
           alt="visacard"
         ></img>
         <img
           src="data:image/png;base64,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"
           alt="upi_logo"
           style={{ border: "2px solid #666666", borderRadius: "2px" }}
         ></img>
         <img
           src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png"
           alt="phonepe"
         ></img>
         <img
           src="data:image/png;base64,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"
           alt="paytm"
         ></img>
       </div>

       <form onSubmit={handleSubmit}>
         <div className="d-flex flex-column">
           <h6 style={{ marginTop: "5px" }}>Select a Payment Mode</h6>
           <label>
             <input
               type="radio"
               name="paymentMode"
               value="UPI"
               checked={paymentMode === "UPI"}
               onChange={handlePaymentModeChange}
             />
             UPI
           </label>
           <label>
             <input
               type="radio"
               name="paymentMode"
               value="Card"
               checked={paymentMode === "Card"}
               onChange={handlePaymentModeChange}
             />
             Card
           </label>
         </div>
         {paymentMode === "Card" && (
           <div>
             <label>
               Card Type:
               <select value={cardType} onChange={handleCardTypeChange}>
                 <option value=""></option>
                 <option value="Visa">Visa</option>
                 <option value="Mastercard">Mastercard</option>
               </select>
             </label>

             {/* Card UI  */}
             <div style={{ border: "3px solid black", margin: "1rem",width: "100%",paddingBottom:"1.5rem",borderRadius: "5%"}}>
               <div className="mt-4 mx-4">
                 <div className="text-center">
                   <h7>Credit card</h7>{" "}
                 </div>
                 <div className="form mt-3">
                   <div className="inputbox">
                     <h7>Cardholder Name</h7>{" "}
                     <input
                       type="text"
                       name="name"
                       class="form-control"
                       required="required"
                     />
                   </div>
                   <div className="inputbox">
                     <h7>Card Number</h7> <i className="fa fa-eye"></i>{" "}
                     <input
                       type="text"
                       name="name"
                       min="1"
                       max="999"
                       class="form-control"
                       required="required"
                     />
                   </div>
                   <div className="d-flex">
                      <h7>Expiration Date</h7>
                     <div class="inputbox">
                       <input
                         type="text"
                         name="name"
                         min="1"
                         max="999"
                         class="form-control"
                         required="required"
                       />
                     </div>
                     <h7>CVV</h7>
                     <div class="inputbox">
                       <input
                         type="text"
                         name="name"
                         min="1"
                         max="999"
                         class="form-control"
                         required="required"
                       />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )}
         {paymentMode === "UPI" && (
           <div>
             <label>
               Mobile Number:
               <input
                 type="text"
                 value={mobileNumber}
                 onChange={handleMobileNumberChange}
               />
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



// <div class="mt-4 mx-4">
//   <div class="text-center">
//     {" "}
//     <h5>Credit card</h5>{" "}
//   </div>
//   <div class="form mt-3">
//     <div class="inputbox">
//       <input type="text" name="name" class="form-control" required="required" />
//       <h5>Cardholder Name</h5>{" "}
//     </div>
//     <div class="inputbox">
//       <input
//         type="text"
//         name="name"
//         min="1"
//         max="999"
//         class="form-control"
//         required="required"
//       />
//       <h5>Card Number</h5> <i class="fa fa-eye"></i>{" "}
//     </div>
//     <div class="d-flex flex-row">
//       <div class="inputbox">
//         <input
//           type="text"
//           name="name"
//           min="1"
//           max="999"
//           class="form-control"
//           required="required"
//         />
//         <h5>Expiration Date</h5>{" "}
//       </div>
//       <div class="inputbox">
//         <input
//           type="text"
//           name="name"
//           min="1"
//           max="999"
//           class="form-control"
//           required="required"
//         />
//         <h5>CVV</h5>{" "}
//       </div>
//     </div>
//     <div class="px-5 pay">
//       <button class="btn btn-success btn-block">Add card</button>
//     </div>
//   </div>
// </div>; 