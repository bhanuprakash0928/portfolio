import React from "react";

function About() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <span className="badge">
            MERN | Java | Aspiring Developer
          </span>

          <h1>
            Welcome to <span>Bhanu Prakash Reddy's</span> Portfolio
          </h1>

          <p>
            Hi there! I create clean and modern web applications 
            that solve real-world problems. Passionate about building 
            scalable and efficient solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me →</a>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src="/profile.png" alt="Profile" />
        </div>

      </div>

    </section>
  );
}

export default About;