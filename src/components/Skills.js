import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* Top Title */}
      <div className="skills-header">
        <span className="badge">Expertise</span>
        <h2>Skills & Technologies</h2>
        <p>
          A diverse set of skills and technologies I've mastered to deliver exceptional results
        </p>
      </div>

      {/* Cards */}
      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card">
          <div className="icon">💻</div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Bootstrap, Tailwind CSS</li>
            <li>React</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <div className="icon">🖥️</div>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill-card">
          <div className="icon">🗄️</div>
          <h3>Database</h3>
          <ul>
            <li>MongoDB & Mongoose</li>
            <li>SQL Databases</li>
          </ul>
        </div>

        {/* Programming */}
        <div className="skill-card">
          <div className="icon">☕</div>
          <h3>Programming & DSA</h3>
          <ul>
            <li>Java Development</li>
            <li>Data Structures & Algorithms</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <div className="icon">🛠️</div>
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>AI Tools</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <div className="icon">👤</div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Team Leadership</li>
            <li>Communication</li>
            <li>Problem Solving</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;