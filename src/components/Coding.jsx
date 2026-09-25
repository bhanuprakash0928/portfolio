import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

// Centralized Project Data for cleaner code
const projectData = [
  {
    id: 1,
    title: "KShopping",
    fullDesc: "A full-stack e-commerce web application developed using Java and Spring Boot. The application allows users to browse products, manage their shopping cart, place orders, and interact with a structured backend for managing application data securely and efficiently.",
    // Add multiple image paths here for the slider
    images: ["/image.png", "/image.png", "/image.png"], 
    tags: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "SQL"],
    github: "https://github.com/bhanuprakash0928/k-shopping",
    live: null,
    delay: "0.1s"
  },
  {
    id: 2,
    title: "Vehicle Booking System",
    fullDesc: "A web-based vehicle booking application designed to simplify the process of searching and booking vehicles for different travel requirements. The system provides an interactive interface for selecting booking details, calculating estimated costs, and managing the overall booking experience.",
    images: ["/image2.png", "/image2.png"],
    tags: ["React", "JavaScript", "HTML/CSS", "REST API"],
    github: null,
    live: "https://quick-ride-parcel.lovable.app/",
    delay: "0.2s"
  },
  {
    id: 3,
    title: "Cosmetics Product Analysis Dashboard",
    fullDesc: "An interactive Tableau dashboard developed to analyze cosmetics products across different brands and categories. The project analyzes product ratings, prices, brands, categories, and customer insights to identify trends and support data-driven decision-making. Data was cleaned and prepared using Excel and SQL before creating visualizations.",
    images: ["/Dashboard 1.png", "/Dashboard 1.png"],
    tags: ["Tableau", "SQL", "Excel", "Data Analysis", "Data Visualization"],
    github: "https://github.com/bhanuprakash0928/Cosmetic-Insights-Tableau",
    live: "https://public.tableau.com/app/profile/yettapu.bhanu.prakash.reddy/viz/CosmeticsDashboard_17829848680900/Dashboard1",
    delay: "0.3s"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    fullDesc: "A responsive personal portfolio website developed using React to showcase my technical skills, projects, education, certifications, and professional journey. The portfolio features responsive design, smooth animations, interactive sections, and a highly polished user interface.",
    images: ["/image1.png", "/image1.png"],
    tags: ["React", "JavaScript", "HTML", "CSS", "Vite"],
    github: "https://github.com/bhanuprakash0928/portfolio",
    live: "https://y-bhanu-portfolio.netlify.app/",
    delay: "0.4s"
  }
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock background scrolling when modal is open (Pro-level UX)
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const openModal = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => 
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header fade-in-up">
        <span className="project-badge">Projects</span>
        <h2>Featured Projects</h2>
        <p>
          A selection of my projects showcasing full-stack development,
          frontend development, data analytics, and problem-solving using
          modern technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card slide-up"
            style={{ animationDelay: project.delay }}
          >
            <div className="project-image-wrapper">
              <img src={project.images[0]} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <button 
                className="view-more-btn"
                onClick={() => openModal(project)}
                aria-label={`View details for ${project.title}`}
              >
                View More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close popup">
              &times;
            </button>
            
            {/* Image Slider */}
            <div className="modal-carousel">
              <img 
                src={activeProject.images[currentImageIndex]} 
                alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`} 
                className="carousel-image"
              />
              
              {activeProject.images.length > 1 && (
                <>
                  <button className="carousel-btn left" onClick={prevImage}>&#10094;</button>
                  <button className="carousel-btn right" onClick={nextImage}>&#10095;</button>
                  <div className="carousel-dots">
                    {activeProject.images.map((_, idx) => (
                      <span 
                        key={idx} 
                        className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      ></span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Text Content */}
            <div className="modal-body">
              <h3>{activeProject.title}</h3>
              
              <div className="modal-section">
                <h4>About the Project</h4>
                <p>{activeProject.fullDesc}</p>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tags">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noreferrer" className="project-btn primary">
                    Live Demo
                  </a>
                )}
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="project-btn outline">
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;