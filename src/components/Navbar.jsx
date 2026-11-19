import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import ThemeControls from "./ThemeControls.jsx";
import "../styles/Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/#skills" },
  { label: "Education", to: "/#education" },
  { label: "Projects", to: "/#projects" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <Logo onClick={close} />

      {/* Mobile menu button */}
      <button
        type="button"
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation */}
      <ul id="nav-links" className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.to} onClick={close}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className="nav-controls">
          <ThemeControls />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
