import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";

// Sections
import About from "./components/About";     // Hero Section (Home)
import Education from "./components/Education";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Coding from "./components/Coding";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HOME (Hero + All intro sections) */}
      <About />

      {/* Main Content */}
      <div className="container">
        <Skills />
        <Education />
        

        {/* Important Sections */}
        <Coding />
        <Contact />

      </div>
    </>
  );
}

export default App;