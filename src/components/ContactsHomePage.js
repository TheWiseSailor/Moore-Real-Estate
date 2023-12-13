import React, { useState } from "react";
import "../App.css";
import Instagram from "../components/SocialLinkImages/Instagram.png";
import Facebook from "../components/SocialLinkImages/Facebook.png";
import Twitter from "../components/SocialLinkImages/Twitter.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setFormSubmitted(true);
  };

  return (
    <div className="contact-container-form">
      <div className="contact-form-container">
        <h2 className="ContactHomePageHeader-container pb-6">Contact Form</h2>
        {formSubmitted ? (
          <div className="confirmation-message-container">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="label-container" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="label-container" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="label-container" htmlFor="phone">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label className="label-container bg-black-600" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label className="label-container" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

            <button className="button-container" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>

      <div className="company-info-container">
        <h2>Our Location</h2>
        <p>29058 North Pole Drive, Wilmington, NC</p>
        <p>Phone: +1 (555) 123-4567</p>
        <div className="social-logos-container">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="social-logo" />
          </a>
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
    </div>
  );
};

export default ContactForm;
