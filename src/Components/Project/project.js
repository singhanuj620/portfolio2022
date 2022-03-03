import React from 'react'
import './project.css'

const project = ({ project }) => {
    return (
        <div className="project_container">
            <div className="project_img_div" onClick={() => window.open(
                project.github,
                '_blank'
            )}>
                <img src={project.image} alt={project.title} className="project_img" />
            </div>
            <div className="project_info">
                <div className="project_title">{project.title}</div>
                <div className="project_description">{project.description}</div>
                <div className="project_link_div">
                    <button onClick={() => window.open(
                        project.github,
                        '_blank'
                    )}>Github</button>
                    {project.demo !== "" ?
                        <button ><a href={project.demo} target="_blank" rel="noopener noreferrer" className="link">Demo </a></button> : null}
                </div>
            </div>
        </div>
    )
}

export default project