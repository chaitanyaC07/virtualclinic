import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faEarDeaf } from "@fortawesome/free-solid-svg-icons";

import "../Style/service.css";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faHeartPulse} />
          </span>

          <h3>Cardiology</h3>
          <p>Diagnosing and treating diseases of the heart</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>
          <h3>Ophthalmology</h3>
          <p>Diagnosis and treatment of disorders </p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faPills} />
          </span>
          <h3>General Medicine</h3>
          <p>Diagnosis, treatment and management of general</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBrain} />
          </span>
          <h3>Psychiatry</h3>
          <p>Diagnosis and treatment of mental illness</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBed} />
          </span>
          <h3>General Surgery</h3>
          <p>Diagnosis and preoperative, operative</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEarDeaf} />
          </span>
          <h3>ENT</h3>
          <p>Diagnosis and treatment of diseases of ear, nose and throat.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
