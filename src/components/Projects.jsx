import { useMemo } from "react";
import { Link } from "react-router-dom";
import SnapSection from "./SnapSection.jsx";
import ProjectLinks from "./ProjectLinks.jsx";
import { projects } from "../data/projects.js";
import { getProjectImages } from "../utils/projectImages.js";
import { pad } from "../utils/format.js";
import "../styles/Projects.css";

/** Full-screen, scroll-snap project showcase – one project per screen. */
function Projects() {
  const items = useMemo(
    () => projects.map((project) => ({ ...project, images: getProjectImages(project) })),
    []
  );

  return (
    <SnapSection
      id="projects"
      label="Featured projects"
      items={items}
      getKey={(project) => project.slug}
      getLabel={(project) => project.title}
      renderItem={(project, index, total) => {
        const cover = project.images[0];
        const extra = project.images.length - 1;

        return (
          <div className="project-screen">
            <div className="project-info">
              <p className="snap-eyebrow">
                <span>Featured Projects</span>
                <span>
                  {pad(index + 1)} / {pad(total)}
                </span>
              </p>

              <span className="project-category">{project.category}</span>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.shortDescription}</p>

              <ul className="tech-list" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-actions">
                <Link to={`/projects/${project.slug}`} className="btn btn-primary">
                  View Project →
                </Link>
                <ProjectLinks project={project} />
              </div>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className={cover ? "project-preview" : "project-preview is-empty"}
              aria-label={`View ${project.title} project details`}
            >
              {cover ? (
                <>
                  <span className="preview-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <img
                    src={cover.src}
                    alt={`${project.title} – project preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  {extra > 0 && (
                    <span className="preview-count">+{extra} more screenshot{extra > 1 ? "s" : ""}</span>
                  )}
                </>
              ) : (
                <span className="preview-empty">{pad(index + 1)}</span>
              )}
            </Link>
          </div>
        );
      }}
    />
  );
}

export default Projects;
