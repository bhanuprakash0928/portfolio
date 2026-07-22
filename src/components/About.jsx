import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <span className="badge">
                Java | Spring Boot | Maven & Data Analytics | Tableau
          </span>
          <h1>
            Hi, I'm <span>Yettapu Bhanu Prakash Reddy</span>
          </h1>

          <p>
           Passionate Computer Science student with hands-on experience in Java,
            Spring Boot, Maven, SQL, and Tableau. I enjoy developing backend
            applications and creating interactive data analytics dashboards to solve
            real-world problems. Currently seeking opportunities to grow as a Java
            Developer or Data Analyst while continuously enhancing my technical skills.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me →</a>

            <a
              href="/resume.pdf"
              download
              className="btn resume-btn"
            >
              Resume
            </a>
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