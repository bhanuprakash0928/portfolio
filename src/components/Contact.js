import React from "react";

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
        <a href="mailto:ybhanuprakashreddy2004@gmail.com">Email Me</a>
        <a href="https://github.com/bhanuprakash0928" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;