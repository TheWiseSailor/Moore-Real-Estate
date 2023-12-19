import React from "react";
import classNames from "classnames";
import "./About.css";
// make the title for the about us
// make an areawhere it showcases our team and then when we click our team we can see their info... or just do a simple flip card attribute.
// then make another section about how our team is dedicated to help finding you your future home/realestate/etc.
// if think of anything else = right it down
const About = () => {
  return (
    <div className="about-page-container">
      <div className="centered-container">
        <h1 className="AboutUsSection text-4xl md:text-6xl font-bold mb-4">
          Real Estate Made Simple
        </h1>
        <p className="About-opening-sentence text-white mb-8 text-lg md:text-2xl font-bold">
          Navigating the world of real estate made simple with our streamlined
          solutions and expertise.
        </p>
      </div>

      <div className="team-section-1 pb-56">
        <h2 className="text-2xl font-bold mb-4 ">Our Team</h2>
      </div>
    </div>
  );
};

export default About;
