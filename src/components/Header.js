/* global $ */
import React, { useEffect } from "react";
import "../App";
import $ from "jquery";
import hamburgerImage from "../components/images/modern.png";

const Header = () => {
  useEffect(() => {
    // Function to handle toggle of the mobile menu
    const handleNavToggle = () => {
      $("#nav-menu").toggleClass("open");
    };

    // Event binding for navToggle button click
    $("#nav-toggle").click(handleNavToggle);

    // Event binding for close-flyout button click
    $("#close-flyout").click(() => {
      $("#nav-menu").removeClass("open");
    });

    // Event binding for mobile menu item click
    $("#nav-menu a").click(() => {
      $("#nav-menu").removeClass("open");
    });

    // Function to handle window resize and show/hide hamburger menu
    const handleWindowResize = () => {
      if (window.innerWidth >= 769) {
        $(".hamburger-menu").hide();
      } else {
        $(".hamburger-menu").show();
      }
    };

    // Initial check for screen width
    handleWindowResize();

    // Event binding for window resize
    $(window).resize(handleWindowResize);

    // Cleanup function for useEffect
    return () => {
      $(window).off("resize", handleWindowResize);
      $("#nav-toggle").off("click", handleNavToggle);
    };
  }, []);

  return (
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
  );
};

export default Header;
