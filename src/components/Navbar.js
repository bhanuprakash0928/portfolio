import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Logo + Name */}
      <div className="nav-left">
        <div className="logo-box">B</div>
        <span className="logo-text">Bhanu Prakash Reddy</span>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Right Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#projects">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;