// App.js
import React from "react";
import Header from "./components/Header/Header";
import Homepage from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";
import "./App.css"; // You can create this file for your global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
      <Works />
    </div>
  );
}

export default App;
