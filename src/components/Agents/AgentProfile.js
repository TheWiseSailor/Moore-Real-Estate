import React from "react";
import { useParams } from "react-router-dom";
import agent1Image from "../images/AgentHomepageImages/SamanthaBennett.png";

const agentData = [
  {
    id: 1,
    name: "Samantha Bennett",
    image: agent1Image,
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
