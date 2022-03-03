import React from 'react'
import './projects.css'
import Project from '../../Components/Project/project'
import { info } from '../../info'

const projects = () => {
    return (
        <div className="projects_container">
            <div className="projects_title"><div></div>Projects</div>
            {
                info.projects.map((project, index) => {
                    return (
                        <Project key={index} project={project} />
                    )
                })
            }
            <div className="project_link_div projects_github_profile">
                <button onClick={() => window.open(
                    "https://github.com/singhanuj620",
                    '_blank'
                )}>Github Profile</button>
            </div>
        </div>
    )
}

export default projects