import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Lightbox from "./Lightbox.jsx";
import ProjectLinks from "./ProjectLinks.jsx";
import { projects, getProject } from "../data/projects.js";
import { getProjectImages } from "../utils/projectImages.js";
import "../styles/Projects.css";
import "../styles/ProjectDetails.css";

function Section({ number, title, children }) {
  return (
    <section className="pd-section">
      <h2>
        <span className="pd-number">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Dedicated details page:  /projects/:slug */
function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  const images = useMemo(() => (project ? getProjectImages(project) : []), [project]);
  const [previewIndex, setPreviewIndex] = useState(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousTitle = document.title;
    document.title = `${project.title} | Yettapu Bhanu Prakash Reddy`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <main className="pd">
        <div className="pd-container pd-missing">
          <h1>Project not found</h1>
          <p>The project you are looking for does not exist.</p>
          <Link to="/#projects" className="btn btn-primary">
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const position = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  const lightboxItems = images.map((img, i) => ({
    src: img.src,
    title: project.title,
    subtitle: `Screenshot ${i + 1} of ${images.length}`,
    alt: `${project.title} – screenshot ${i + 1}`,
  }));

  // Sections are numbered automatically and only shown when the data exists
  const sections = [];
  const add = (title, content) => content && sections.push({ title, content });

  add("Project Overview", project.overview && <p>{project.overview}</p>);
  add("Problem Statement", project.problem && <p>{project.problem}</p>);
  add(
    "Project Objectives",
    project.objectives?.length > 0 && (
      <ul className="pd-list">
        {project.objectives.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  );
  add(
    "Features & Functionalities",
    project.features?.length > 0 && (
      <div className="pd-features">
        {project.features.map((feature) => (
          <div className="pd-feature" key={feature.label}>
            <h3>{feature.label}</h3>
            <p>{feature.value}</p>
          </div>
        ))}
      </div>
    )
  );
  add(
    "Technologies Used",
    project.technologies?.length > 0 && (
      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    )
  );
  add("My Role & Contribution", project.role && <p>{project.role}</p>);
  add(
    "Implementation Details",
    project.implementation?.length > 0 && (
      <ol className="pd-steps">
        {project.implementation.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    )
  );
  add(
    "Screenshots & Gallery",
    images.length > 0 && (
      <div className="pd-gallery">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.path}
            className="pd-thumb"
            onClick={() => setPreviewIndex(i)}
            aria-label={`Open ${project.title} screenshot ${i + 1} in full size`}
          >
            <img
              src={img.src}
              alt={`${project.title} – screenshot ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    )
  );
  add(
    "Repository & Live Demo",
    (project.github || project.live || project.dashboardLink || project.storyLink) && (
      <div className="project-actions">
        <ProjectLinks project={project} className="btn btn-primary" />
      </div>
    )
  );

  return (
    <main className="pd">
      <div className="pd-container">
        <Link to="/#projects" className="pd-back">
          <FaArrowLeft aria-hidden="true" /> Back to Projects
        </Link>

        <header className="pd-hero">
          <span className="project-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="pd-lead">{project.shortDescription}</p>
          <div className="project-actions">
            <ProjectLinks project={project} />
          </div>
        </header>

        {images[0] && (
          <button
            type="button"
            className="pd-cover"
            onClick={() => setPreviewIndex(0)}
            aria-label={`Open ${project.title} preview in full size`}
          >
            <img src={images[0].src} alt={`${project.title} – main preview`} decoding="async" />
          </button>
        )}

        {sections.map((section, i) => (
          <Section key={section.title} number={String(i + 1).padStart(2, "0")} title={section.title}>
            {section.content}
          </Section>
        ))}

        <nav className="pd-pager" aria-label="More projects">
          <Link to={`/projects/${prev.slug}`} className="pd-pager-link">
            <span>
              <FaArrowLeft aria-hidden="true" /> Previous project
            </span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pd-pager-link is-next">
            <span>
              Next project <FaArrowRight aria-hidden="true" />
            </span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </div>

      {previewIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={previewIndex}
          onIndexChange={setPreviewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </main>
  );
}

export default ProjectDetails;
