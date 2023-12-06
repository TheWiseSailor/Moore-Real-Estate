import React from "react";
import "../App.css";
import AOSInitializer from "./AOS/AOSInitializer";
const HowItWorksSection = () => {
  return (
    <section id="how-it-works">
      <AOSInitializer />
      <div className="container">
        <h2>How It Works</h2>
        <div className="flex">
          <div>
            <span className="fas fa-home " data-aos="fade-left"></span>
            <h4>Find a Property.</h4>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
          </div>

          <div>
            <span className="fas fa-dollar-sign"></span>
            <h4>Buy a Property.</h4>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
          </div>

          <div>
            <span className="fas fa-chart-line"></span>
            <h4>Investing.</h4>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
