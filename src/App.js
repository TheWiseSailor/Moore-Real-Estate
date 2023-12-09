// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PropertyHomepage from "./components/PropertyHomePage";
import AgentHomePage from "./components/AgentsHomePage";
import Works from "./components/Works";
import Footer from "./components/Footer";
import "./App.css"; // You can create this file for your global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Works />
      <PropertyHomepage />
      <AgentHomePage />
      <Footer />
    </div>
  );
}

export default App;
