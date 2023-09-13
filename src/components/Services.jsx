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
          <p>Cardiology</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>
          <p>Ophthalmology</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faPills} />
          </span>
          <p>General Medicine</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBrain} />
          </span>
          <p>Psychiatry</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBed} />
          </span>
          <p>General Surgery</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEarDeaf} />
          </span>
          <p>ENT</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
