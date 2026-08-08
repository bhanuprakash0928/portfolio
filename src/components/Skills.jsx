import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      
      <div className="section-title fade-in-up">
        <span className="section-tag">Technical Skills</span>
        <h2>Technologies I Work With</h2>
        <p>
          A snapshot of my technical toolkit, focused on developing scalable 
          backend systems and dynamic user interfaces.
        </p>
      </div>

      <div className="skills-container">
        
        <div className="skill-card slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="card-header">
            <h3>Frontend</h3>
          </div>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="card-header">
            <h3>Backend</h3>
          </div>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>Maven</li>
          </ul>
        </div>

        <div className="skill-card slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="card-header">
            <h3>Database</h3>
          </div>
          <ul>
            <li>MySQL</li>
            <li>SQL</li>
            <li>Data Modeling</li>
          </ul>
        </div>

        <div className="skill-card slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="card-header">
            <h3>Programming</h3>
          </div>
          <ul>
            <li>Java Core</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Object-Oriented Programming</li>
          </ul>
        </div>

        <div className="skill-card slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="card-header">
            <h3>Developer Tools</h3>
          </div>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>IntelliJ IDEA</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;