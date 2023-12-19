import React from "react";
import { useParams } from "react-router-dom";
import agent1Image from "../images/AgentHomepageImages/SamanthaBennett.png";
import agent2Image from "../images/AgentHomepageImages/AnnaMae.png";
import agent3Image from "../images/AgentHomepageImages/ZachHolland.png";
import agent4Image from "../images/AgentHomepageImages/KenLowell.png";

const agentData = [
  {
    id: 1,
    name: "Samantha Bennett",
    image: agent1Image,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Anna Mae",
    image: agent2Image,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Zach Holland",
    image: agent3Image,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Ken Lowell",
    image: agent4Image,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const AgentProfile = () => {
  const { name } = useParams();

  const agent = agentData.find((agent) => agent.name === name);

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div>
      <h1>{agent.name}</h1>
      <img src={agent.image} alt={agent.name} style={{ maxWidth: "20%" }} />
      <p>{agent.description}</p>
    </div>
  );
};

export default AgentProfile;