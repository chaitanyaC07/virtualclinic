import React from "react";
import "../Style/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navItem">
          <a className="nav-link" href="/home">
            Home
          </a>
        </div>
        <div className="navItem">
          <a className="nav-link" href="/aboutus">
            About us
          </a>
        </div>
        <div className="navItem">
          <a className="nav-link" href="/services">
            Services
          </a>
        </div>
        <div className="navItem">
          <a className="nav-link" href="/register">
            Login/Sigup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
