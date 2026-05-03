import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <span className="code-symbol">&lt;/&gt;</span>
        <span className="footer-name">Bhanu Prakash Reddy</span>
      </div>

      {/* CENTER */}
      <div className="footer-center">
        <div>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="made-by">Made by Bhanu Prakash Reddy</p>
      </div>

      {/* RIGHT */}
      <div className="footer-right">
        <a href="mailto:ybhanuprakashreddy2004@gmail.com">
          <FaEnvelope />
        </a>

        <a 
          href="https://github.com/bhanuprakash0928" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* SCROLL TOP */}
      <div className="scroll-top">
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>

    </footer>
  );
}

export default Footer;