import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Foot.jsx";
import Contact from "./components/Contact.jsx";
import Coding from "./components/Coding.jsx";
import Certificates from "./components/Certificates.jsx";
import Gallery from "./components/Gallery.jsx";

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Education />
      <Coding />
      <Certificates />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;