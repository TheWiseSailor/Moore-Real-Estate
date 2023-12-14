import React, { useState } from "react";
import "../App.css";

import AOSInitializer from "./AOS/AOSInitializer";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [typing, setTyping] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Set typing to true once user starts typing
    setTyping((prevTyping) => ({
      ...prevTyping,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData(initialFormData);
    setTyping({
      name: false,
      email: false,
      phone: false,
      subject: false,
      message: false,
    });
  };

  return (
    <div className="contact-container-form">
      <h1
        className="ContactUsNow mb-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Contact Us!
      </h1>
      <AOSInitializer />

      <div
        className="contact-form-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="ContactHomePageHeader-container pb-6">Contact Form</h2>
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
            placeholder={typing.name ? "" : "John"} // Display placeholder if not typing
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
            placeholder={typing.email ? "" : "john@example.com"}
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
            placeholder={typing.phone ? "" : "555-123-4567"}
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
            placeholder={typing.subject ? "" : "Write your subject here!"}
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
            placeholder={typing.message ? "" : "Write your message here!"}
          ></textarea>

          <button className="button-container" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
