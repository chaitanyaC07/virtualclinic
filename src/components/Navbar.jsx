import React from "react";
import "../Style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navItem">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="navItem">
          <Link className="nav-link" to="/about">
            About us
          </Link>
        </div>
        <div className="navItem">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </div>
        <div className="navItem">
          <Link className="nav-link" to="/login">
            Login/
          </Link>
          <Link className="nav-link" to="/sigup">
            Sigup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
