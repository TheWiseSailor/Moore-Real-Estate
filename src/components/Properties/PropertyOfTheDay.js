import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Listing1Image1 from "../images/PropertyHomepageImages/Listing1.png";
import Listing1Image2 from "../Properties/PropertyOfTheDayImages/Listing1Image2.jpg";
import Listing1Image3 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing2Image1 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing2Image2 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing2Image3 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing3Image1 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing3Image2 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing3Image3 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing4Image1 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing4Image2 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import Listing4Image3 from "../Properties/PropertyOfTheDayImages/Listing1Image3.jpg";
import "../Properties/PropertyOfTheDay.css";

const PropertyOfTheDay = () => {
  const { id } = useParams();

  const allProperties = [
    {
      id: 1,
      images: [Listing1Image1, Listing1Image2, Listing1Image3],
      price: "$1,200,000 / $12-20k Month",
      details: "3 beds / 2 baths / 3500 sqft",
      address: "Wilmington, NC",
    },
    {
      id: 2,
      images: [Listing2Image1, Listing2Image2, Listing2Image3],
      price: "$700,000 / $7-14k Month",
      details: "2 beds / 3 baths / 2000 sqft",
      address: "Charleston, SC",
    },
    {
      id: 3,
      images: [Listing3Image1, Listing3Image2, Listing3Image3],
      price: "$600,000 / $6-12k Month",
      details: "3 beds / 2.5 baths / 1800 sqft",
      address: "Wilmington, NC",
    },
    {
      id: 4,
      images: [Listing4Image1, Listing4Image2, Listing4Image3],
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
    <div className="PropertyOfTheDayBg">
      <h1 className="pt-32">Property Details</h1>
      <Carousel showThumbs={false}>
        {property.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Property ${property.id} - ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="PropertyDetails">
        <p className="">{property.price}</p>
        <p className="">{property.details}</p>
        <p className="">{property.address}</p>
      </div>
    </div>
  );
};

export default PropertyOfTheDay;
