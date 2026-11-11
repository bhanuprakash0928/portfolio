import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <div className="logo-box">B</div>
        <h2>Yettapu Bhanu Prakash Reddy</h2>
      </div>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#certificates">Certificates</a>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;