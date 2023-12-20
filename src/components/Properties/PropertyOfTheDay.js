import React from "react";
import { useParams } from "react-router-dom";
import Listing1Image from "../images/PropertyHomepageImages/Listing1.png";
import Listing2Image from "../images/PropertyHomepageImages/Listing2.png";
import Listing3Image from "../images/PropertyHomepageImages/Listing3.png";
import Listing4Image from "../images/PropertyHomepageImages/Listing4.png";

const PropertyOfTheDay = () => {
  const { id } = useParams();

  const allProperties = [
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
  ];

  const property = allProperties.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>Property Details</h1>
      <img src={property.image} alt={`Property ${property.id}`} />
      <p>{property.price}</p>
      <p>{property.details}</p>
      <p>{property.address}</p>
    </div>
  );
};

export default PropertyOfTheDay;
