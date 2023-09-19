import React from "react";
import "../Style/banner.css";
import bannerImg from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-card">
      <img src={bannerImg} alt="banner-img" />

      <button className="book-now">Book</button>
    </div>
  );
};

export default Banner;
