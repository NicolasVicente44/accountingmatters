import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import WelcomeMessage from "./Components/WelcomeMessage";
import CompanyHistory from "./Components/CompanyHistory";

import Consult from "./Components/Contact";
import ServicesContent from "./Components/ServicesContent";
import About2 from "./Components/About2";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesContentPage />} />
          <Route path="/welcome" element={<WelcomeMessage />} />
          <Route path="/about" element={<About />} />
          <Route path="/consult" element={<ConsultContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WelcomeMessage />
    </div>
  );
}

function About() {
  return (
    <div>
      <CompanyHistory />
    </div>
  );
}

function ConsultContent() {
  return (
    <div>
      <Consult />
    </div>
  );
}

function ServicesContentPage() {
  return (
    <div>
      <ServicesContent />
      <About2 />
    </div>
  );
}

export default App;
