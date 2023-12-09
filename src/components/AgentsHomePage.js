// the following images are from freepik.com, and unsplash.com
// RealEstateAgents.jsx
import React from "react";
import agent1ImageUrl from "./images/AgentHomepageImages/SamanthaBennett.png";
import agent2ImageUrl from "./images/AgentHomepageImages/AnnaMae.png";
import agent3ImageUrl from "./images/AgentHomepageImages/ZachHolland.png";
import agent4ImageUrl from "./images/AgentHomepageImages/KenLowell.png";
import AOSInitializer from "./AOS/AOSInitializer";
import "../App.css";

const RealEstateAgents = () => {
  return (
    <div className="real-estate-agents-container">
      <AOSInitializer />
      <h1
        className="AgentHomepage mb-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Meet Our Agents!
      </h1>
      <div className="agent-card" data-aos="fade-up" data-aos-duration="1000">
        <img
          src={agent1ImageUrl}
          alt="Real Estate Agent 1"
          className="agent-image"
        />
        <div className="agent-details">
          <div className="agent-name">Samantha Bennett</div>
        </div>
      </div>
      <div className="agent-card" data-aos="fade-up" data-aos-duration="1000">
        <img
          src={agent2ImageUrl}
          alt="Real Estate Agent 2"
          className="agent-image"
        />
        <div className="agent-details">
          <div className="agent-name">Anna Mae</div>
        </div>
      </div>
      <div className="agent-card" data-aos="fade-up" data-aos-duration="1000">
        <img
          src={agent3ImageUrl}
          alt="Real Estate Agent 3"
          className="agent-image"
        />
        <div className="agent-details">
          <div className="agent-name">Zach Holland</div>
        </div>
      </div>
      <div className="agent-card" data-aos="fade-up" data-aos-duration="1000">
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
  );
};
export default RealEstateAgents;
