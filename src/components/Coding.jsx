import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section"  fade-in>

      <div className="projects-header">
        <span className="project-badge">Projects</span>
        <h2>Featured Projects</h2>
        <p>
          Some of the projects I have developed using Java, Spring Boot,
          React and modern web technologies.
        </p>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card">

          <img src="/image.png" alt="KShopping" />

          <div className="project-content">

            <h3>KShopping</h3>

            <p>
              A full-stack e-commerce application where users can browse
              products, add items to cart and place orders securely.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/bhanuprakash0928/k-shopping"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <img src="/image1.png" alt="Portfolio" />

          <div className="project-content">

            <h3>Personal Portfolio</h3>

            <p>
              A responsive developer portfolio built with React showcasing
              skills, education, certificates and projects.
            </p>

            <div className="tags">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/bhanuprakash0928/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <img src="/image2.png" alt="Vehicle Booking" />

          <div className="project-content">

            <h3>Vehicle Booking System</h3>

            <p>
              Developed a travel planning application that helps users explore
              routes, calculate travel time, distance and estimated cost.
            </p>

            <div className="tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">

              <a
                href="https://quick-ride-parcel.lovable.app/"
                target="_blank"
                rel="noreferrer"
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