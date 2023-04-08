import "./faqs.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  withStyles,
  Divider,
} from "@mui/material";

const faqsArray = [
    {
      question: "What services do you offer?",
      answer: "We offer pet sitting, dog walking, and overnight stays in your home."
    },
    {
      question: "How do I book your services?",
      answer: "You can book our services online through our website or by calling our office."
    },
    {
      question: "What are your rates?",
      answer: "Our rates vary depending on the type of service and length of time required. Please see our website or call our office for more information."
    },
    {
      question: "Do you have insurance?",
      answer: "Yes, we have liability insurance to protect your pet and your property while under our care."
    },
    {
      question: "Do you offer services for all types of pets?",
      answer: "We primarily offer services for dogs and cats, but we can also care for other types of pets on a case-by-case basis. Please contact us to discuss your specific needs."
    },
    {
      question: "What qualifications do your pet sitters have?",
      answer: "All of our pet sitters are experienced, professional caregivers who have undergone background checks and are insured and bonded."
    },
    {
      question: "What happens if my pet gets sick or injured while under your care?",
      answer: "If your pet becomes sick or injured while under our care, we will contact you immediately and take your pet to the nearest vet hospital or emergency animal clinic."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24 hours notice for cancellations. If you cancel within 24 hours of the scheduled service, you will be charged a cancellation fee."
    },
    {
      question: "Do you offer discounts for long-term bookings?",
      answer: "Yes, we offer discounts for long-term bookings. Please contact us to discuss your specific needs."
    },
    {
      question: "What happens if I have an emergency and need to cancel a scheduled service?",
      answer: "We understand that emergencies can happen. Please contact us as soon as possible if you need to cancel a scheduled service due to an emergency."
    }
  ];

const Faqs = () => {
  return (
    <div className="faq-wrapper">
      {faqsArray.map(({question,answer})=>{
        return(
            <Accordion>
        <AccordionSummary>
          <Typography variant="h5">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "#43A6C6" }}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
      
        )
      })}
    </div>
  );
};

export default Faqs;
