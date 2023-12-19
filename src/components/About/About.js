import React from "react";
import agent1ImageUrl from "../images/AgentHomepageImages/SamanthaBennett.png";
import agent2ImageUrl from "../images/AgentHomepageImages/AnnaMae.png";
import agent3ImageUrl from "../images/AgentHomepageImages/ZachHolland.png";
import agent4ImageUrl from "../images/AgentHomepageImages/KenLowell.png";
import AOSInitializer from "../AOS/AOSInitializer";
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
        <h2 className="text-5xl font-bold mb-4 ">Our Team</h2>
        <div className="real-estate-agents-container ">
          <AOSInitializer />

          <div
            className="agent-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={agent1ImageUrl}
              alt="Real Estate Agent 1"
              className="agent-image"
            />
            <div className="agent-details">
              <div className="agent-name">Samantha Bennett</div>
            </div>
          </div>
          <div
            className="agent-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={agent2ImageUrl}
              alt="Real Estate Agent 2"
              className="agent-image"
            />
            <div className="agent-details">
              <div className="agent-name">Anna Mae</div>
            </div>
          </div>
          <div
            className="agent-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={agent3ImageUrl}
              alt="Real Estate Agent 3"
              className="agent-image"
            />
            <div className="agent-details">
              <div className="agent-name">Zach Holland</div>
            </div>
          </div>
          <div
            className="agent-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={agent4ImageUrl}
              alt="Real Estate Agent 4"
              className="agent-image"
            />
            <div className="agent-details">
              <div className="agent-name">Ken Lowell</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
