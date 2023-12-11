import React from "react";
import "../App.css";
import AOSInitializer from "./AOS/AOSInitializer";
import AboutImage1 from "../components/images/AboutUsImages/About1.png";
import AboutImage2 from "../components/images/AboutUsImages/About2.png";

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
          <div className="about-us-image with-text-on-left ">
            <p className="AboutUsTwo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur urna at est dapibus, a lacinia lorem viverra. Integer
              blandit volutpat nulla a mattis.
            </p>
            <img src={AboutImage2} alt="AboutImage2" className="AboutImage2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
