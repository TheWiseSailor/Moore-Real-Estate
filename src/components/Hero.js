import React, { useEffect } from "react";
import Slider from "react-slick";

const HeroSection = () => {
  useEffect(() => {
    const headerElem = document.querySelector("header");
    const logo = document.getElementById("logo");
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    const propertiesSlider = document.getElementById("properties-slider");
    const testimonialsSlider = document.getElementById("testimonials-slider");

    const initSliders = () => {
      new Slider(propertiesSlider, {
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      });

      new Slider(testimonialsSlider, {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>',
      });
    };

    const handleNavToggleClick = () => {
      navMenu.style.right = "0";
    };

    const handleCloseFlyoutClick = () => {
      navMenu.style.right = "-100%";
    };

    const handleDocumentClick = (e) => {
      const target = e.target;
      if (!(target.closest("#nav-toggle") || target.closest("#nav-menu"))) {
        navMenu.style.right = "-100%";
      }
    };

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 0) {
        navMenu.classList.add("is-sticky");
        logo.style.color = "#000";
        headerElem.style.background = "#fff";
        navToggle.style.borderColor = "#000";
        navToggle.querySelector(".strip").style.backgroundColor = "#000";
      } else {
        navMenu.classList.remove("is-sticky");
        logo.style.color = "#fff";
        headerElem.style.background = "transparent";
        navToggle.style.borderColor = "#fff";
        navToggle.querySelector(".strip").style.backgroundColor = "#fff";
      }

      headerElem.style.cssText =
        scrollTop >= 200
          ? "padding: 0.5rem; box-shadow: 0 -4px 10px 1px #999;"
          : "padding: 1rem 0; box-shadow: none;";
    };

    navToggle.addEventListener("click", handleNavToggleClick);
    document
      .getElementById("close-flyout")
      .addEventListener("click", handleCloseFlyoutClick);
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", handleScroll);

    initSliders();
    handleScroll(); // Trigger scroll event on component mount

    return () => {
      navToggle.removeEventListener("click", handleNavToggleClick);
      document
        .getElementById("close-flyout")
        .removeEventListener("click", handleCloseFlyoutClick);
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header-hero-container">
      {/* The rest of your hero section JSX */}
      <section id="hero">
        <div className="fade"></div>
        <div className="hero-text">
          <h1>Buy and sell real estate properties</h1>
          <p>Lorem ipsum dolor sit amet consectectur adipisicing elit...</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
