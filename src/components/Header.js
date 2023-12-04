// Header.js
/* global $ */
import React, { useEffect } from "react";
import "../components/Header.css";
import $ from "jquery";
import hamburgerImage from "./images/modern.png";
const Header = () => {
  useEffect(() => {
    const navToggle = $("#nav-toggle");
    const navMenu = $("#nav-menu");

    navToggle.click(() => {
      navMenu.toggleClass("open");
    });

    $("#close-flyout").click(() => {
      navMenu.removeClass("open");
    });

    // Close the mobile menu when a menu item is clicked
    $("#nav-menu a").click(() => {
      navMenu.removeClass("open");
    });

    // Check the initial screen width and hide the hamburger menu if needed
    if (window.innerWidth >= 769) {
      $(".hamburger-menu").hide();
    }

    // Update the hamburger menu visibility on window resize
    $(window).resize(() => {
      if (window.innerWidth >= 769) {
        $(".hamburger-menu").hide();
      } else {
        $(".hamburger-menu").show();
      }
    });
  }, []);

  return (
    <React.Fragment>
      <head>
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
      </head>
      <header>
        <div className="flex container">
          <a id="logo" href="#">
            Moore Real-estate.
          </a>
          <nav>
            <button id="nav-toggle" className="hamburger-menu">
              <img src={hamburgerImage} alt="Hamburger Icon" />
              <span className="strip"></span>
              <span className="strip"></span>
              <span className="strip"></span>
            </button>

            <ul id="nav-menu">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="http://www.google.com" target="_blank">
                  Properties
                </a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li id="close-flyout">
                <span className="fas fa-times"></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
