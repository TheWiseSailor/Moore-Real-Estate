import React from "react";
import { useParams } from "react-router-dom";
import agent1Image from "../images/AgentHomepageImages/SamanthaBennett.png";
import agent2Image from "../images/AgentHomepageImages/AnnaMae.png";
import agent3Image from "../images/AgentHomepageImages/ZachHolland.png";
import agent4Image from "../images/AgentHomepageImages/KenLowell.png";

import facebookIcon from "./Facebook.png";
import instagramIcon from "./Instagram.png";
import twitterIcon from "./Twitter.png";

import "./agents.css";

const agentData = [
  {
    id: 1,
    name: "Samantha Bennett",
    image: agent1Image,
    description: "Senior Real Estate Agent",
    location: "123 Main St, Wilmington, NC",
    phoneNumber: "+1234567890",
    address: "123 Main St, Cityville",
    socials: {
      facebook: "facebook.com/samantha.bennett",
      twitter: "@samantha_realtor",
      instagram: "@samantha_realestate",
    },
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
      <div className="AgentProfileBg ">
        <img src={agent.image} alt={agent.name} className="AgentImage" />
        <h1 className="AgentName">{agent.name}</h1>
        <p className="Description">{agent.description}</p>

        {/* Additional Sections */}
        {agent.location && (
          <p className="Location">Location: {agent.location}</p>
        )}
        {agent.address && <p className="Address">Address: {agent.address}</p>}
        {agent.phoneNumber && (
          <p className="PhoneNumber">Phone: {agent.phoneNumber}</p>
        )}

        {agent.socials && (
          <div className="SocialLinks">
            {agent.socials.facebook && (
              <a
                href={agent.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
            )}
            {agent.socials.twitter && (
              <a
                href={`https://twitter.com/${agent.socials.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
            )}
            {agent.socials.instagram && (
              <a
                href={`https://instagram.com/${agent.socials.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
