import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* Header */}
      <div className="projects-header">
        <span className="badge">Projects</span>
        <h2>My Work</h2>
        <p>Some of the projects I have built recently</p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card-new">
          <img src="/image.png" alt="project" />

          <div className="project-content">
            <h3>KShopping – Smart Online Retail Application</h3>
            <p>
             KShopping is a full-stack e-commerce web application that enables users to browse products, add items to cart, and place orders easily.

            </p>

            <div className="tags">
              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>
            </div>

            <div className="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card-new">
          <img src="/project2.png" alt="project" />

          <div className="project-content">
            <h3>Quiz Application</h3>
            <p>
              A quiz platform with categories, scoring system, and leaderboard.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <div className="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card-new">
          <img src="/project3.png" alt="project" />

          <div className="project-content">
            <h3>Student Management</h3>
            <p>
              CRUD application to manage student records with database integration.
            </p>

            <div className="tags">
              <span>React</span>
              <span>SQL</span>
              <span>API</span>
            </div>

            <div className="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;