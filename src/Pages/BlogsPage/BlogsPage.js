import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogsPage.css';
import { fetchDevToBlogs, getBlogStats } from '../../Utilities/devToApi';
import { ClipLoader } from 'react-spinners';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const devToBlogs = await fetchDevToBlogs();
        setBlogs(devToBlogs);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
        console.error('Error loading blogs:', err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="blogs-page-container">
        <div className="loading-container">
          <ClipLoader color="#00d4ff" size={50} />
          <p>Loading blogs from dev.to...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blogs-page-container">
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  const stats = getBlogStats(blogs);

  return (
    <div className="blogs-page-container">
      <div className="blogs-page-header">
        <Link to="/" className="back-home-link">← Back to Home</Link>
        <h1>Tech Blogs</h1>
        <p>Explore my latest articles and insights on web development, React, and more.</p>
      </div>

      <div className="blogs-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.totalArticles}</span>
          <span className="stat-label">Articles Published</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.totalReactions}</span>
          <span className="stat-label">Total Reactions</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.totalViews}</span>
          <span className="stat-label">Total Views</span>
        </div>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={blog.id || index} className="blog-card">
            {blog.cover_image && (
              <div className="blog-image">
                <img src={blog.cover_image} alt={blog.title} />
              </div>
            )}
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">
                  {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="blog-reading-time">{blog.reading_time_minutes || 5} min read</span>
              </div>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">
                {blog.description || blog.excerpt || 'Click to read the full article...'}
              </p>
              <div className="blog-tags">
                {blog.tag_list && blog.tag_list.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">#{tag}</span>
                ))}
              </div>
              <div className="blog-stats">
                <div className="blog-stat">
                  <span>❤️ {blog.public_reactions_count || 0}</span>
                </div>
                <div className="blog-stat">
                  <span>📖 {blog.reading_time_minutes || 'N/A'} min</span>
                </div>
              </div>
              <div className="blog-actions">
                <a 
                  href={blog.url || blog.canonical_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more-btn"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blogs-footer">
        <div className="dev-to-profile">
          <p>Want to see more articles?</p>
          <a 
            href="https://dev.to/singhanuj620" 
            target="_blank" 
            rel="noopener noreferrer"
            className="dev-to-btn"
          >
            Visit My Dev.to Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;