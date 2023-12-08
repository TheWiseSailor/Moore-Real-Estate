import React from "react";
import Instagram from "../components/SocialLinkImages/Instagram.png";
import Facebook from "../components/SocialLinkImages/Facebook.png";
import Twitter from "../components/SocialLinkImages/Twitter.png";

import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-logos">
          {/* LOGOS ARE FROM FLATICON And ICONS8 */}
          {/* Instagram Logo with direct link */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="social-logo" />
          </a>
          {/* Facebook Logo with link */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="social-logo pl-6 pr-6"
            />
          </a>
          {/* Twitter Logo (now called 'x') with link */}
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Twitter}
              alt="Twitter (now called 'x')"
              className="social-logo"
            />
          </a>
        </div>
      </div>
      <div className="footer-right pt-4">
        <p>Copyright &copy; 2023 All rights reserved | Moore Real Estate</p>
      </div>
    </footer>
  );
};

export default Footer;
