import React from "react";
import "../App.css"; // Make sure to adjust the path based on your project structure

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text pb-24">
          <h2>About Us</h2>
        </div>
        <div className="about-us-images d-flex ">
          <div
            className="about-us-image with-text-on-right"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            {/* Image on the left with text on the right */}
            <img
              src="https://placekitten.com/400/300" // Replace with your image URL
              alt="Abstract Image Left"
            />
            <p className="AboutUsOne">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur urna at est dapibus, a lacinia lorem viverra. Integer
              blandit volutpat nulla a mattis.
            </p>
          </div>
          <div
            className="about-us-image with-text-on-left pt-96"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Image on the right with text on the left */}
            <p className="AboutUsTwo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur urna at est dapibus, a lacinia lorem viverra. Integer
              blandit volutpat nulla a mattis.
            </p>
            <img
              src="https://placekitten.com/400/300" // Replace with your image URL
              alt="Abstract Image Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
