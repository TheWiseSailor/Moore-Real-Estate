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
        <div className="about-us-text pb-24">
          <h2>About Us</h2>
        </div>
        <div className="about-us-images d-flex ">
          <div className="about-us-image with-text-on-right">
            <img
              src="https://placekitten.com/400/300"
              alt="Abstract Image Left"
            />
            <p className="AboutUsOne">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur urna at est dapibus, a lacinia lorem viverra. Integer
              blandit volutpat nulla a mattis.
            </p>
          </div>
          <div className="about-us-image with-text-on-left pt-96">
            <p className="AboutUsTwo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur urna at est dapibus, a lacinia lorem viverra. Integer
              blandit volutpat nulla a mattis.
            </p>
            <img
              src="https://placekitten.com/400/300"
              alt="Abstract Image Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
