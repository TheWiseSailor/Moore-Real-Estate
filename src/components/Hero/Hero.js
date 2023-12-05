import React from "react";

import "../Hero/Hero.css";

const Homepage = () => {
  return (
    <section id="hero">
      <div className="fade"></div>
      <div className="hero-text">
        <h1 className="pb-12  text-5xl">Buy and sell real estate properties</h1>
        <p>
          Unlock the door to your dream - where buying and selling properties
          becomes an art, not just a transaction.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
