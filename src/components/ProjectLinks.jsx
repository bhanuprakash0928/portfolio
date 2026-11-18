import { FaGithub, FaExternalLinkAlt, FaChartBar } from "react-icons/fa";

const isUrl = (value) => typeof value === "string" && /^https?:\/\//i.test(value);

/** GitHub / Live Demo / Tableau buttons. Only links that exist are rendered. */
function ProjectLinks({ project, className = "btn btn-outline" }) {
  return (
    <>
      {isUrl(project.github) && (
        <a href={project.github} target="_blank" rel="noreferrer" className={className}>
          <FaGithub aria-hidden="true" /> GitHub
        </a>
      )}
      {isUrl(project.live) && (
        <a href={project.live} target="_blank" rel="noreferrer" className={className}>
          <FaExternalLinkAlt aria-hidden="true" /> Live Demo
        </a>
      )}
      {isUrl(project.dashboardLink) && (
        <a href={project.dashboardLink} target="_blank" rel="noreferrer" className={className}>
          <FaChartBar aria-hidden="true" /> Dashboard
        </a>
      )}
      {isUrl(project.storyLink) && (
        <a href={project.storyLink} target="_blank" rel="noreferrer" className={className}>
          <FaChartBar aria-hidden="true" /> Story
        </a>
      )}
    </>
  );
}

export default ProjectLinks;
