import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-component">
          <h1> virtual clinic logo </h1>
          <h2>About us</h2>
          <p>
            An online clinic to consult doctors and medical specialist for wide
            range of health issues. Get all your health problems sorted
            virtually under one roof.
          </p>
        </div>
        <div className="footer-component">
          <h1> Our services</h1>
          <ul>
            <li>Viral Illness</li>

            <li>Prescription & Refills</li>
            <li>Walk In Clinic Online</li>
            <li>General Health</li>
            <li>Other Services</li>
          </ul>
        </div>
        <div className="footer-component">
          <h1>Reach out us</h1>
          <h3>Email</h3>
          <p>virtual@gmail.com</p>
          <h3>Contant Number</h3>
          <p>2345423536</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
