import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

// Centralized Project Data with structured details
const projectData = [
  {
    id: 1,
    title: "KShopping",
    shortDesc: "A full-stack e-commerce web application developed using Java and Spring Boot.",
    roleAndUse: "Developed a secure, scalable backend and dynamic frontend to streamline the online shopping experience. In the real world, this architecture enables businesses to manage inventory, process secure checkouts, and handle user data efficiently.",
    features: [
      { label: "Description", value: "Java, Spring Boot, and React stack managing application data." },
      { label: "User Dashboard", value: "Browse products, manage shopping cart, and place orders." },
      { label: "Admin Dashboard", value: "Monitor user activity, track orders, and update inventory." },
      { label: "Mail Services", value: "Automated order confirmation and status email notifications." }
    ],
    images: ["/image.png", "/image.png", "/image.png"], 
    tags: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "SQL"],
    github: "https://github.com/bhanuprakash0928/k-shopping",
    live: null,
    delay: "0.1s"
  },
  {
    id: 2,
    title: "Vehicle Booking System",
    shortDesc: "A web-based application designed to simplify vehicle booking for travel.",
    roleAndUse: "Built an interactive interface for calculating estimated costs and booking trips. Real-world applications include logistics management and ride-hailing services, optimizing route planning and fleet allocation.",
    features: [
      { label: "Description", value: "React and REST API integration for real-time data handling." },
      { label: "User Dashboard", value: "Search vehicles, select travel details, and view cost estimates." },
      { label: "Booking System", value: "Seamless booking flow with interactive UI elements." }
    ],
    images: ["/image2.png", "/image2.png"],
    tags: ["React", "JavaScript", "HTML/CSS", "REST API"],
    github: null,
    live: "https://quick-ride-parcel.lovable.app/",
    delay: "0.2s"
  },
  {
    id: 3,
    title: "Cosmetics Product Analysis Dashboard",
    shortDesc: "An interactive Tableau dashboard to analyze cosmetics products and trends.",
    roleAndUse: "Cleaned and transformed raw data using Excel and SQL to build interactive visualizations. In a business context, this helps cosmetic brands identify market trends, pricing strategies, and customer preferences for data-driven decisions.",
    features: [
      { label: "Description", value: "End-to-end data pipeline from raw Excel/SQL to Tableau." },
      { label: "Trend Analysis", value: "Visualized product ratings, prices, brands, and categories." },
      { label: "Customer Insights", value: "Extracted actionable metrics to support marketing strategies." }
    ],
    images: ["/Dashboard 1.png", "/Dashboard 1.png"],
    tags: ["Tableau", "SQL", "Excel", "Data Analysis", "Data Visualization"],
    github: "https://github.com/bhanuprakash0928/Cosmetic-Insights-Tableau",
    live: null,
    dashboardLink: "https://public.tableau.com/app/profile/yettapu.bhanu.prakash.reddy/viz/CosmeticsDashboard_17829848680900/Dashboard1",
    storyLink: "#", // Replace with your actual Tableau Story link
    delay: "0.3s"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    shortDesc: "A responsive portfolio website to showcase my technical skills and projects.",
    roleAndUse: "Designed and developed a highly polished UI to present my professional journey. It demonstrates modern web development practices, accessibility standards, and responsive design to potential employers.",
    features: [
      { label: "Description", value: "Built with React and Vite for optimal performance." },
      { label: "UI/UX Design", value: "Features smooth animations, glassmorphism, and responsive grids." },
      { label: "Accessibility", value: "Keyboard navigable with semantic HTML structure." }
    ],
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

  // Lock background scrolling when modal is open
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
              <p className="project-short-desc">{project.shortDesc}</p>
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
                <h4>Project Overview & Real-World Use</h4>
                <p>{activeProject.roleAndUse}</p>
              </div>

              {/* Horizontal Headings / Features Grid */}
              <div className="modal-section">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {activeProject.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <h5>{feature.label}</h5>
                      <p>{feature.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tags">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Links dynamically adapt based on project data */}
              <div className="modal-links">
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noreferrer" className="project-btn primary">
                    Live Demo
                  </a>
                )}
                {activeProject.dashboardLink && (
                  <a href={activeProject.dashboardLink} target="_blank" rel="noreferrer" className="project-btn primary">
                    View Dashboard
                  </a>
                )}
                {activeProject.storyLink && (
                  <a href={activeProject.storyLink} target="_blank" rel="noreferrer" className="project-btn secondary">
                    View Story
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