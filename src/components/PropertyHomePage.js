import React from "react";
import "../App.css";

const PropertyHomePage = () => {
  const topProperties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$500,000",
      details: "3 beds / 2 baths / 1500 sqft",
      address: "123 Main St",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$700,000",
      details: "4 beds / 3 baths / 2000 sqft",
      address: "456 Oak St",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$600,000",
      details: "3 beds / 2.5 baths / 1800 sqft",
      address: "789 Pine St",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$800,000",
      details: "5 beds / 4 baths / 2500 sqft",
      address: "101 Elm St",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$900,000",
      details: "6 beds / 3.5 baths / 3000 sqft",
      address: "202 Maple St",
    },
  ];

  return (
    <div className="property-container">
      <h1>Top 5 Properties!</h1>
      {topProperties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={`Property ${property.id}`} />
          <div className="property-details">
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p>{property.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHomePage;
