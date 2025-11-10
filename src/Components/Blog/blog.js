import React, { useState } from 'react';
import './blog.css';

const Blog = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);
    const blogUrl = blog.url || blog.canonical_url;
    const blogImage = blog.image || blog.cover_image || blog.social_image;
    const blogTitle = blog.title;
    
    return (
        <div 
            className={`modern_blog_card ${isHovered ? 'hovered' : ''}`}
            onClick={() => window.open(blogUrl, '_blank')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="blog_image_section">
                <div className="blog_image_container">
                    <img src={blogImage} alt={blogTitle} className="blog_image" />
                    <div className="blog_image_overlay">
                        <span className="overlay_text">Read Article</span>
                    </div>
                </div>
            </div>
            
            <div className="blog_content">
                <div className="blog_header">
                    <h3 className="blog_title">{blogTitle}</h3>
                </div>
                
                <div className="blog_meta">
                    {blog.published_at && (
                        <div className="blog_date">
                            <span className="date_icon">📅</span>
                            <span>{new Date(blog.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}</span>
                        </div>
                    )}
                    
                    {(blog.public_reactions_count || blog.reading_time_minutes) && (
                        <div className="blog_stats">
                            {blog.public_reactions_count && (
                                <span className="blog_stat">
                                    <span className="stat_icon">❤️</span>
                                    <span>{blog.public_reactions_count}</span>
                                </span>
                            )}
                            {blog.reading_time_minutes && (
                                <span className="blog_stat">
                                    <span className="stat_icon">📖</span>
                                    <span>{blog.reading_time_minutes} min</span>
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;