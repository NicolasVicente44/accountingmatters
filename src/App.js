import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import WelcomeMessage from "./Components/WelcomeMessage";
import CompanyHistory from "./Components/CompanyHistory";
import MissionAndValues from "./Components/MissionAndValues";
import TeamAndExpertise from "./Components/TeamAndExpertise";
import Consult from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
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
      <MissionAndValues />
      <TeamAndExpertise />
    </div>
  );
}

function ConsultContent() {
  return (
    <div>
      {/* Render the content for the "Consult" route here */}
      <Consult />
    </div>
  );
}

export default App;
