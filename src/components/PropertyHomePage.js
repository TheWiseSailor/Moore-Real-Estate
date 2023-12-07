import React from "react";
import Listing1Image from "../components/images/PropertyHomepageImages/Listing1.png";
import Listing2Image from "../components/images/PropertyHomepageImages/Listing2.png";
import Listing3Image from "../components/images/PropertyHomepageImages/Listing3.png";
import Listing4Image from "../components/images/PropertyHomepageImages/Listing4.png";
import Listing5Image from "../components/images/PropertyHomepageImages/Listing5.png";

import "../App.css";

const PropertyHomePage = () => {
  const topProperties = [
    {
      id: 1,
      image: Listing1Image,
      price: "$1,200,000 / $12-20k Month",
      details: "3 beds / 2 baths / 3500 sqft",
      address: "Wilmington, NC",
    },
    {
      id: 2,
      image: Listing2Image,
      price: "$700,000 / $7-14k Month",
      details: "2 beds / 3 baths / 2000 sqft",
      address: "Charleston, SC",
    },
    {
      id: 3,
      image: Listing3Image,
      price: "$600,000 / $6-12k Month",
      details: "3 beds / 2.5 baths / 1800 sqft",
      address: "Wilmington, NC",
    },
    {
      id: 4,
      image: Listing4Image,
      price: "$800,000 / $8-16k Month",
      details: "5 beds / 4 baths / 2500 sqft",
      address: "Wrightsville, NC",
    },
    {
      id: 5,
      image: Listing5Image,
      price: "$900,000 / $9-18k Month",
      details: "2 beds / 3.5 baths / 3000 sqft",
      address: "Cape Fear, NC",
    },
  ];

  return (
    <div className="property-container">
      <h1 className="Todays-Title">Today's Property Listings</h1>
      {topProperties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={`Property ${property.id}`} />
          <div className="property-details">
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p className="property-address">{property.address}</p>
            <button className="green-button">View!</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHomePage;
