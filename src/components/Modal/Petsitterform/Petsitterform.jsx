import './Petsitterfrom.css'
import React from "react";
import Rodal from "rodal";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";


const Petsitterform = ({showsitterModal , setsitterShowModal}) => {
    const [ownerName, setOwnerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [datesRequested, setDatesRequested] = useState('');
    const [petType, setPetType] = useState('');
    const [petName, setPetName] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [servicesRequested, setServicesRequested] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');

    const petTypes = [' Dog', ' Cat', ' Both'];

    const handlePetTypeChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        setPetType([...petType, value]);
      } else {
        setPetType(petType.filter((type) => type !== value));
      }
    }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
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
        visible={showsitterModal}
        onClose={() => setsitterShowModal(false)}
      >
        <h1>Book a sitter</h1>

        <div className='d-flex'></div>

        {/* Sitter Form */}
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
        
        <label htmlFor="ownerName">Pet Owner's Name:</label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />

          <label htmlFor="contactInfo" className='margin-left-2'>Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
         
         <div className='date-n-type d-flex justify-content-around'>  <label htmlFor="datesRequested">Dates of Service:</label>
          <input
            type="date"
            id="datesRequested"
            value={datesRequested}
            onChange={(e) => setDatesRequested(e.target.value)}
          />

          <label htmlFor="petType">Type of Pet:</label>
          {petTypes.map((type) => (
            <div key={type}>
              <input
                type="checkbox"
                id={type}
                name="petType"
                value={type}
                checked={petType.includes(type)}
                onChange={handlePetTypeChange}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}</div>
        

          <label htmlFor="petName">Pet Name:</label>
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />

          <label htmlFor="specialInstructions">Special Instructions:</label>
          <textarea
            id="specialInstructions"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />

          <label htmlFor="servicesRequested">Desired Services:</label>
          <textarea
            id="servicesRequested"
            value={servicesRequested}
            onChange={(e) => setServicesRequested(e.target.value)}
          />

          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />

          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input
            type="text"
            id="emergencyContact"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
          />

          <label htmlFor="paymentInfo">Payment Information:</label>
          <input
            type="text"
            id="paymentInfo"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
          />
        </form>

        <button type="submit">Submit</button>
      </Rodal>
    );
};

export default Petsitterform