import React from "react";
import { Helmet } from "react-helmet";
import "../components/Hero.css";

const Homepage = () => {
  return (
    <section id="hero">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-eLJBlcgoIqR+Ll6hNj5AqeJgtXLWrq1uvALZAdTIpuJGA/G5m4G7vFTi3qeXqzQ"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.4.min.js"
          integrity="sha256-oQ2e4WZpd7IyLlKc7Jh3sO7EA5R2aRjZ1irCEtE9wpM="
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="fade"></div>
      <div className="hero-text">
        <h1>Buy and sell real estate properties</h1>
        <p>
          Lorem ipsum dolor sit amet consectectur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
