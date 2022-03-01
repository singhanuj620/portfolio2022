import React from 'react'
import './blogs.css'
import Blog from '../../Components/Blog/blog'
import { info } from '../../info'
const Blogs = () => {

    return (
        <div className="projects_container">
            <div className="projects_title"><div></div>Blogs</div>
            {
                info.projects.map((project, index) => {
                    return (
                        <Blog key={index} project={project} />
                    )
                })
            }
        </div>
    )
}

export default Blogs