import React from "react";
import "./projects.css";
import Project from "../../Components/Project/project";
import { info } from "../../info";

const projects = () => {
  return (
    <div className="projects_container" id="projects">
      <div className="projects_content">
        <div className="section_header">
          <div className="section_icon">🚀</div>
          <h2 className="section_title">My Projects</h2>
          <p className="section_subtitle">Building digital solutions that make a difference</p>
        </div>
        
        <div className="projects_grid">
          {info.projects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
        
        <div className="projects_cta">
          <div className="cta_text">Want to see more of my work?</div>
          <button
            className="github_profile_btn"
            onClick={() =>
              window.open("https://github.com/singhanuj620", "_blank")
            }
          >
            <span className="btn_icon">🔗</span>
            <span className="btn_text">View GitHub Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default projects;
