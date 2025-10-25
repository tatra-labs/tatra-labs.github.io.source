import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="projects-title-wrapper">
          <h1 className="projects-title">My Projects</h1>
        </div>
        <p className="projects-subtitle">Innovation • Development • Impact</p>
      </div>

      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
