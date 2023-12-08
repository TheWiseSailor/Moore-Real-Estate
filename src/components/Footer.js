import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-logos">
          {/* Instagram Logo */}
          <img
            src="/path/to/instagram-logo.png"
            alt="Instagram"
            className="social-logo"
          />

          {/* Facebook Logo */}
          <img
            src="/path/to/facebook-logo.png"
            alt="Facebook"
            className="social-logo"
          />

          {/* Twitter Logo (latest version) */}
          <img
            src="/path/to/twitter-logo-x.png"
            alt="Twitter"
            className="social-logo"
          />
        </div>
      </div>
      <div className="footer-right">
        <p>Copyright &copy; 2023 All rights reserved | Moore Real Estate</p>
      </div>
    </footer>
  );
};

export default Footer;
