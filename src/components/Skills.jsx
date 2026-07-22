import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-title">
        <span className="section-tag">Technical Skills</span>
        <h2>Technologies I Work With</h2>
        <p>
          My technical skills and tools for developing modern web applications.
        </p>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>Maven</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Programming</h3>
          <ul>
            <li>Java</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Object-Oriented Programming</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Developer Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>IntelliJ IDEA</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Currently Learning</h3>
          <ul>
            <li>Spring Security</li>
            <li>JWT Authentication</li>
            <li>Microservices</li>
            <li>Docker</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;