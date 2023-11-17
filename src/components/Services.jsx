import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faEarDeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Style/service.css";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faHeartPulse} />
          </span>
          <Link to="/serviceCard">
            {" "}
            <h3>Cardiology</h3>
          </Link>

          <p>Diagnosing and treating diseases of the heart</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>
          <Link to="/serviceCard">
            {" "}
            <h3>Ophthalmology</h3>
          </Link>

          <p>Diagnosis and treatment of disorders </p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faPills} />
          </span>
          <Link to="/serviceCard">
            <h3>General Medicine</h3>
          </Link>
          <p>Diagnosis, treatment and management of general</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBrain} />
          </span>
          <Link to="/serviceCard">
            <h3>Psychiatry</h3>
          </Link>
          <p>Diagnosis and treatment of mental illness</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faBed} />
          </span>
          <Link to="/serviceCard">
            <h3>General Surgery</h3>
          </Link>
          <p>Diagnosis and preoperative, operative</p>
        </div>
        <div className="service-item">
          <span>
            <FontAwesomeIcon icon={faEarDeaf} />
          </span>
          <Link to="/serviceCard">
            <h3>ENT</h3>
          </Link>
          <p>Diagnosis and treatment of diseases of ear, nose and throat.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
