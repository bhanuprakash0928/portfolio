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
      

      {/* Main Content */}
      <div className="container">
        {/* Navbar */}
      <Navbar />

      {/* HOME (Hero + All intro sections) */}
      <About />
        <Skills />
        <Education />
        

        {/* Important Sections */}
        <Coding />
        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;