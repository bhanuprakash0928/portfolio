import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";
function Contact() {
  return (
    <section id="contact" className="contact-section reveal-section">
      <div className="contact-header">
        <span className="badge">Contact</span>
        <h2>Get In Touch</h2>
        <p>
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      <div className="contact-buttons">

  <a href="mailto:ybhanuprakashreddy2004@gmail.com">
    <FaEnvelope /> Email Me
  </a>

  <a
    href="https://github.com/bhanuprakash0928"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub /> GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin /> LinkedIn
  </a>

</div>
    </section>
  );
}

export default Contact;