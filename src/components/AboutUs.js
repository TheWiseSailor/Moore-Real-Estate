import React from "react";
import "../App.css";
import AOSInitializer from "./AOS/AOSInitializer";
import AboutImage1 from "../components/images/AboutUsImages/About1.png";
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
            {/* <a href="https://www.vecteezy.com/free-png/real-estate">Real Estate PNGs by Vecteezy</a> */}
            <img src={AboutImage1} alt="AboutImage1" className="AboutImage1" />
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
