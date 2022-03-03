import React from 'react'
import './blogs.css'
import Blog from '../../Components/Blog/blog'
import { info } from '../../info'
const Blogs = () => {

    return (
        <div className="blogs_container">
            <div className="blogs_title"><div></div>Blogs</div>
            <div className="blogs_cards_div">
                {
                    info.blogs.map((blog, index) => {
                        return (
                            <Blog key={index} blog={blog} />
                        )
                    })
                }
            </div>
            <div className="project_link_div projects_github_profile">
                <button onClick={() => window.open(
                    "https://dev.to/singhanuj620",
                    '_blank'
                )}>Dev.to Profile</button>
            </div>
        </div>
    )
}

export default Blogs