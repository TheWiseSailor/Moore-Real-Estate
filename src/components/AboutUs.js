import React from "react";
import "../App.css";
import AOSInitializer from "./AOS/AOSInitializer";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <AOSInitializer />

      <div
        className="about-us-content"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <AOSInitializer />
        <div className="about-us-text ">
          <h2 className="">About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
