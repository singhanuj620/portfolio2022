import React from 'react'
import './blog.css'

const Blog = ({ blog }) => {
    return (
        <div className="blog_container" onClick={() => window.open(blog.url,
            '_blank')}>
            <div className="blog_img_div">
                <img src={blog.image} alt={blog.title} className="blog_img" />
            </div>
            <div className="blog_title">
                {blog.title}
            </div>
        </div>
    )
}

export default Blog