import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <span className="code-symbol">
          <img src="/logo-yb.png" alt="" width="24" height="21" />
        </span>
        <span className="footer-name">Bhanu Prakash Reddy</span>
      </div>

      {/* CENTER */}
      <div className="footer-center">
        <div>
          <Link to="/#home">Home</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <p className="made-by">Made by Bhanu Prakash Reddy</p>
      </div>

      {/* RIGHT */}
      <div className="footer-right">
        <a href="mailto:ybhanuprakashreddy2004@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>

        <a 
          href="https://github.com/bhanuprakash0928" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* SCROLL TOP */}
      <div className="scroll-top">
        <Link to="/#home" aria-label="Back to top">
          <FaArrowUp />
        </Link>
      </div>

    </footer>
  );
}

export default Footer;