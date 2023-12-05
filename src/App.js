// App.js
import React from "react";
import Header from "./components/Header";

import Works from "./components/Works";
import Footer from "./components/Footer";
import "./App.css"; // You can create this file for your global styles

function App() {
  return (
    <div className="App">
      <Header />

      <Works />
      <Footer />
    </div>
  );
}

export default App;
