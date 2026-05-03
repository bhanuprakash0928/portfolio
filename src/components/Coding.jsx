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
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Spring Boot</span>
            <span>REST API</span>
          </div>

            <div className="project-links">
              
              <a href="https://github.com/bhanuprakash0928/k-shopping"  target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card-new">
          <img src="/image1.png" alt="project" />

          <div className="project-content">
            <h3>Porsonal Potfolio</h3>
            <p>
              Responsive and animated portfolio site showcasing resume, projects, and contact information.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Html</span>
              <span>css</span>
              <span>Java Script</span>
            </div>

            <div className="project-links">
             
              <a href="https://github.com/bhanuprakash0928/portfolio"  target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card-new">
          <img src="/image2.png" alt="project" />

          <div className="project-content">
            <h3>Vehical Booking for MBU to verious Destinations</h3>
            <p>
              Developed a travel planning system that enables users to explore routes, calculate distance, time, and cost for journeys from MBU to various destinations.
            </p>

            <div className="tags">
              <span>React JavaScript HTML thylandcss </span>
              
            </div>

            <div className="project-links">
              <a href="https://quick-ride-parcel.lovable.app/"  target="_blank ">Live Demo</a>
             
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;