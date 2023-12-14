// Header.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOSInitializer from "./AOS/AOSInitializer";
import $ from "jquery";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

    // Function to handle scroll and update isScrolled state
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    // Initial check for screen width and scroll position
    handleWindowResize();
    handleScroll();

    // Event binding for window resize and scroll
    $(window).resize(handleWindowResize);
    $(window).scroll(handleScroll);

    // Cleanup function for useEffect
    return () => {
      $(window).off("resize", handleWindowResize);
      $(window).off("scroll", handleScroll);
      $("#nav-toggle").off("click", handleNavToggle);
    };
  }, []);

  return (
    <header className={isScrolled ? "sticky-header" : ""}>
      <AOSInitializer />
      <div className="flex container">
        <Link to="/" id="logo" data-aos="fade-down" data-aos-duration="3000">
          Moore Real Estate.
        </Link>
        <nav>
          <button id="nav-toggle" className="hamburger-menu">
            <span className="strip"></span>
            <span className="strip"></span>
            <span className="strip"></span>
          </button>
          <AOSInitializer />
          <ul id="nav-menu" data-aos="fade-down" data-aos-duration="3000">
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
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
              <Link to="/contact">Contact</Link>
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
