import React from "react";
import "../Style/banner.css";
import bannerImg from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-card">
      <img src={bannerImg} alt="banner-img" />
    </div>
  );
};

export default Banner;
