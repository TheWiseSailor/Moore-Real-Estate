// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomepageRender from "./components/HomepageRender";
import ContactFormPage from "./components/ContactPageRender/ContactFormPage"; // Import the ContactFormPage component

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomepageRender />} />
          <Route path="/contact" element={<ContactFormPage />} />{" "}
          {/* Add this line for the Contact page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
