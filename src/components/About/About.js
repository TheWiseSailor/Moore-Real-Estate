import React from "react";
import classNames from "classnames";
import "./About.css";
const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="team-section">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>

        <div className={classNames("team-member", "mb-4")}>
          <img
            src="path/to/image1.jpg"
            alt="Team Member 1"
            className="rounded-full w-16 h-16 mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">Co-founder</p>
          </div>
        </div>
        <div className={classNames("team-member", "mb-4")}>
          <img
            src="path/to/image2.jpg"
            alt="Team Member 2"
            className="rounded-full w-16 h-16 mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Jane Doe</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
