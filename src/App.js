// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomepageRender from "./components/HomepageRender";
import ContactFormPage from "./components/ContactPageRender/ContactFormPage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomepageRender />} />
          <Route path="/Moore-Real-Estate" element={<HomepageRender />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
