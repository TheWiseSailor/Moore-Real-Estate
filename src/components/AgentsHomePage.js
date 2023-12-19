// the following images are from freepik.com, and unsplash.com
// RealEstateAgents.jsx

import React from "react";
import { Link } from "react-router-dom";
import AOSInitializer from "./AOS/AOSInitializer";
import "../App.css";

const agentData = [
  {
    id: 1,
    name: "Samantha Bennett",
    imageUrl: "./images/AgentHomepageImages/SamanthaBennett.png",
  },
  {
    id: 2,
    name: "Anna Mae",
    imageUrl: "./images/AgentHomepageImages/AnnaMae.png",
  },
  {
    id: 3,
    name: "Zach Holland",
    imageUrl: "./images/AgentHomepageImages/ZachHolland.png",
  },
  {
    id: 4,
    name: "Ken Lowell",
    imageUrl: "./images/AgentHomepageImages/KenLowell.png",
  },
];

const AgentCard = ({ agent }) => (
  <Link to={`/agent/${agent.name}`} className="agent-card" key={agent.id}>
    <img src={agent.imageUrl} alt={agent.name} className="agent-image" />
    <div className="agent-details">
      <div className="agent-name">{agent.name}</div>
    </div>
  </Link>
);

const AgentsHomePage = () => {
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
      {agentData.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default AgentsHomePage;
