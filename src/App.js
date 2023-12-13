// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PropertyHomepage from "./components/PropertyHomePage";
import AgentHomePage from "./components/AgentsHomePage";
import ContactsHomePage from "./components/ContactsHomePage";
import Works from "./components/Works";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Works />
      <PropertyHomepage />
      <AboutUs />
      <AgentHomePage />
      <ContactsHomePage />

      <Footer />
    </div>
  );
}

export default App;
