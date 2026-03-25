import React from "react";

function About() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <span className="badge">
             Java | Spring Boot | Maven | Aspiring Developer
          </span>

          <h1>
            Welcome to <span>Bhanu Prakash Reddy's</span> Portfolio
          </h1>

          <p>
           Aspiring software developer with a strong interest in backend development, 
           skilled in Spring Boot and Maven, and eager to learn and grow.
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