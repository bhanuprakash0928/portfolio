import { useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectLinks from "./ProjectLinks.jsx";
import { projects } from "../data/projects.js";
import { getProjectImages } from "../utils/projectImages.js";
import { pad } from "../utils/format.js";
import "../styles/Projects.css";

/** Projects: one main section containing a responsive grid of project cards. */
function Projects() {
  const items = useMemo(
    () => projects.map((project) => ({ ...project, images: getProjectImages(project) })),
    []
  );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header" data-reveal>
        <span className="project-badge">Projects</span>
        <h2>Featured Projects</h2>
        <p>
          A selection of my projects showcasing full-stack development, frontend
          development, data analytics, and problem-solving using modern technologies.
        </p>
      </div>

      <div className="projects-grid">
        {items.map((project, index) => {
          const cover = project.images[0];
          const extra = project.images.length - 1;
          const technologies = project.technologies || [];

          return (
            <article
              className="project-card slide-up"
              key={project.slug}
              style={{ animationDelay: `${(index % 3) * 0.12}s` }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className={cover ? "project-media" : "project-media is-empty"}
                aria-label={`View ${project.title} project details`}
              >
                {cover ? (
                  <>
                    <img
                      src={cover.src}
                      alt={`${project.title} – project preview`}
                      loading="lazy"
                      decoding="async"
                    />
                    {extra > 0 && (
                      <span className="media-count">
                        +{extra} more screenshot{extra > 1 ? "s" : ""}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="media-empty" aria-hidden="true">
                    {pad(index + 1)}
                  </span>
                )}
              </Link>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDescription}</p>

                {technologies.length > 0 && (
                  <ul className="tech-list" aria-label="Technologies used">
                    {technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="project-actions">
                  <Link to={`/projects/${project.slug}`} className="btn btn-primary">
                    View Project →
                  </Link>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
