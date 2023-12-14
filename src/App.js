// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomepageRender from "./components/HomepageRender";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomepageRender />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
