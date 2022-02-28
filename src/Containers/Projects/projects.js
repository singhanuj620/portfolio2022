import React from 'react'
import './projects.css'
import Project from '../../Components/Project/project'
import { info } from '../../info'
const projects = () => {
    return (
        <div className="projects_container" id="projects">
            <div className="projects_title"><div></div>Projects</div>
            {
                info.projects.map((project, index) => {
                    return (
                        <Project key={index} project={project} />
                    )
                })
            }
        </div>
    )
}

export default projects