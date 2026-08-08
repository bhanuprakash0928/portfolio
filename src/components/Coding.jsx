import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* Header */}
      <div className="projects-header fade-in-up">
        <span className="project-badge">Projects</span>
        <h2>Featured Projects</h2>
        <p>
          A selection of my recent work, showcasing full-stack development, 
          UI/UX design, and complex problem-solving using modern web technologies.
        </p>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="project-image-wrapper">
            <img src="/image.png" alt="KShopping" />
          </div>

          <div className="project-content">
            <h3>KShopping</h3>
            <p>
              A full-stack e-commerce application where users can browse
              products, add items to cart, and place orders securely.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>HTML/CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/bhanuprakash0928/k-shopping"
                target="_blank"
                rel="noreferrer"
                className="project-btn outline"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="project-image-wrapper">
            <img src="/image1.png" alt="Portfolio" />
          </div>

          <div className="project-content">
            <h3>Personal Portfolio</h3>
            <p>
              A highly responsive, modern developer portfolio built with React 
              showcasing skills, education, and technical projects.
            </p>

            <div className="tags">
              <span>React</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/bhanuprakash0928/portfolio"
                target="_blank"
                rel="noreferrer"
                className="project-btn outline"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="project-image-wrapper">
            <img src="/image2.png" alt="Vehicle Booking" />
          </div>

          <div className="project-content">
            <h3>Vehicle Booking System</h3>
            <p>
              Developed a dynamic travel planning application that helps users explore
              routes, calculate travel time, distance, and estimated costs.
            </p>

            <div className="tags">
              <span>React</span>
              <span>HTML/CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://quick-ride-parcel.lovable.app/"
                target="_blank"
                rel="noreferrer"
                className="project-btn primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;