import React from "react";
import Banner from "./Banner.jsx";
import Heading from "./Heading.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <Banner />
        <Heading text="CONSULTATION" />
        <Services />
        <Heading text="Connect us" />
        <Footer />
      </>
    </div>
  );
};

export default Home;
