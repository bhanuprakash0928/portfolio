import React from "react";

import "../styles/Gallery.css";
function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">
        <span className="gallery-tag">Gallery</span>
        <h2>My Journey</h2>
        <p>
          A collection of my hackathon achievements, project work, and memorable moments.
        </p>
      </div>

      <div className="gallery-container">

        <div className="gallery-card">
          <img src="/coderesh-2025.jpeg" alt="Hackathon" />
          <div className="gallery-content">
            <h3>Code Rush 2K25</h3>
            <p>Top 20 Team in Code Rush 2K25 Hackathon.</p>
          </div>
        </div>

        <div className="gallery-card">
          <img src="/image.png" alt="KShopping Project" />
          <div className="gallery-content">
            <h3>KShopping Project</h3>
            <p>Spring Boot based E-Commerce Application.</p>
          </div>
        </div>

        <div className="gallery-card">
          <img src="/image1.png" alt="Portfolio" />
          <div className="gallery-content">
            <h3>Personal Portfolio</h3>
            <p>Responsive portfolio built using React.</p>
          </div>
        </div>

        <div className="gallery-card">
          <img src="/image2.png" alt="Vehicle Booking" />
          <div className="gallery-content">
            <h3>Vehicle Booking System</h3>
            <p>Travel planning application developed using React.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Gallery;