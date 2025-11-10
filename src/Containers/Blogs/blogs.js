import React, { useState, useEffect } from "react";
import "./blogs.css";
import Blog from "../../Components/Blog/blog";
import { getHomepageBlogs } from "../../Utilities/devToApi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const homepageBlogs = await getHomepageBlogs();
        setBlogs(homepageBlogs);
      } catch (error) {
        console.error('Error loading blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="blogs_container" id="blogs">
        <div className="blogs_header">
          <div className="section_icon">📝</div>
          <h2 className="section_title">Tech Blogs</h2>
          <p className="section_description">Latest thoughts and insights from my development journey</p>
        </div>
        <div className="blogs_loading">
          <div className="loader">
            <div className="loader-inner"></div>
          </div>
          <p>Loading latest blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs_container" id="blogs">
      <div className="blogs_content">
        <div className="blogs_header">
          <div className="section_icon">📝</div>
          <h2 className="section_title">Tech Blogs</h2>
          <p className="section_description">Latest thoughts and insights from my development journey</p>
        </div>
        
        <div className="blogs_grid">
          {blogs.map((blog, index) => {
            return <Blog key={blog.id || index} blog={blog} />;
          })}
        </div>
        
        <div className="blogs_cta">
          <p className="cta_text">Want to read more? Check out my full collection of articles!</p>
          <button
            className="devto_profile_btn"
            onClick={() => window.open("https://dev.to/singhanuj620", "_blank")}
          >
            <span className="btn_icon">📖</span>
            <span className="btn_text">Dev.to Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
