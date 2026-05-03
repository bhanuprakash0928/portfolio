import React from "react";

function Education() {
  return (
    <section id="skills" className="skills-section">

      {/* Header */}
      <div className="skills-header">
        <h2>Technical Skills</h2>
        <p>Technologies and tools I use to build modern applications</p>
      </div>

      {/* Skills Grid */}
      <div className="skills-container">

        <div className="skill-card">
          <h3>💻 Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>⚙️ Backend</h3>
          <ul>
            <li>Spring Boot</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>🗄️ Database</h3>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>🧠 Programming</h3>
          <ul>
            <li>Java</li>
            <li>Data Structures & Algorithms</li>
            
          </ul>
        </div>

        <div className="skill-card">
          <h3>🛠️ Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Education;