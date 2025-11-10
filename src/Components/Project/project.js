import React, { useState } from "react";
import "./project.css";

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getViewProjectLink = () => {
    // Prioritize demo link, then fallback to GitHub
    if (project.demo && project.demo !== "") {
      return project.demo;
    }
    return project.github || "https://github.com/singhanuj620";
  };

  return (
    <div 
      className={`modern_project_card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project_image_section">
        <div 
          className="project_image_container"
          onClick={() => window.open(getViewProjectLink(), "_blank")}
        >
          <img src={project.image} alt={project.title} className="project_image" />
          <div className="image_overlay">
            <span className="overlay_text">View Project</span>
          </div>
        </div>
      </div>
      
      <div className="project_content">
        <div className="project_header">
          <h3 className="project_title">{project.title}</h3>
        </div>
        
        <div className="project_description_text">
          {project.description}
        </div>
        
        <div className="project_actions">
          {project.github !== "" && (
            <button 
              className="action_btn github_btn"
              onClick={() => window.open(project.github, "_blank")}
            >
              <span className="btn_icon">🔗</span>
              <span className="btn_text">GitHub</span>
            </button>
          )}
          {project.demo !== "" && (
            <button 
              className="action_btn demo_btn"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <span className="btn_icon">🚀</span>
              <span className="btn_text">Live Demo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
