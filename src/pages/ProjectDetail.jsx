import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="not-found">
          <h1>Project not found</h1>
          <button onClick={() => navigate("/projects")} className="back-button">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <button onClick={() => navigate("/projects")} className="back-button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </button>

      <article className="project-article">
        <div className="project-hero">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="hero-image"
          />
        </div>

        <div className="project-detail-header">
          <div className="project-detail-meta">
            <span className="project-detail-category">{project.category}</span>
            <span className="project-detail-year">{project.year}</span>
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.description}</p>
          <div className="project-detail-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-detail-tag">
                {tag}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="project-links">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="project-link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="project-link-button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
            </div>
          )}
        </div>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
        />
      </article>
    </div>
  );
};

export default ProjectDetail;
