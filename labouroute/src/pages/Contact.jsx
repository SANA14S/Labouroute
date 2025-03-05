import React from "react";
import "../styles/Contact.css"; 
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-box">
        <div className="contact-card">
          <h3>Postal Address :</h3>
          <p>
            <strong>Ministry of Labour & Employment</strong> <br />
            Govt. of India, <br />
            Shram Shakti Bhawan <br />
            Rafi Marg, <br />
            New Delhi-110001 <br />
            India
          </p>
        </div>
        <div className="contact-card">
          <h3>For more information contact:</h3>
          <p>
            Email Address:{" "}
            <strong>samadhan-mole[at]gov[dot]in</strong> <br />
            <small>(Only for technical glitches)</small>
          </p>
          <p>
            Telephone Number: <strong>011-23473215</strong> <br />
            <small>(9:00 AM to 5:30 PM on working days)</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
