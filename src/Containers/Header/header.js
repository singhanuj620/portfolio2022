import React from "react";
import "./header.css";
import DP from "../../Images/dp.png";
import NavbarComp from "../../Components/Navbar/navbar";
import { Button } from "react-bootstrap";
import { info } from "../../info";

const header = () => {
  const { profile } = info;

  return (
    <div className="header_container" id="home">
      <NavbarComp />
      <div className="header_content">
        <div className="header_text_div">
          <div className="header_greeting">
            <span className="wave-emoji">👋🏽</span>
            <span className="greeting-text">Hey there! I'm</span>
          </div>
          <div className="header_title">
            <div className="name-line">{profile.name}</div>
            <div className="role-line">{profile.role}</div>
          </div>
          <div className="header_tagline">
            <span className="highlight">{profile.headline}</span>
          </div>
          <div className="header_description">
            <p>
              🚀 Senior Frontend Engineer with <strong>{profile.experience}</strong> of building scalable, high-performance digital products using React.js, Next.js, and TypeScript.
            </p>
            <p>
              💡 Currently working at <span className="company-highlight">{profile.company}</span>, delivering enterprise-grade frontend experiences and GenAI-enabled user interfaces.
            </p>
            <p>
              🎯 I focus on architecture, performance, accessibility, headless CMS integration, and product experiences that scale across global markets.
            </p>
          </div>
          <div className="header_cta">
            <div className="cta-text">Ready to create something amazing together?</div>
            <div className="header_btn_container">
              <div className="btn-group-primary">
                <Button variant="primary" className="header_btn_div cta-primary">
                  <span className="header_btn">
                    <a
                      href={profile.resumeUrl}
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      📄 Download CV
                    </a>
                  </span>
                </Button>
                <Button variant="outline-light" className="header_btn_div cta-secondary">
                  <span className="header_btn">
                    <a href="#contact" className="link">
                      💬 Let's Talk
                    </a>
                  </span>
                </Button>
              </div>
              <div className="btn-group-secondary">
                <Button variant="warning" className="header_btn_div feature-btn">
                  <span className="header_btn">
                    <a href="#projects" className="link">
                      🚀 Projects
                    </a>
                  </span>
                </Button>
                <Button variant="info" className="header_btn_div feature-btn">
                  <span className="header_btn">
                    <a href="#blogs" className="link">
                      📝 Tech Blogs
                    </a>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="header_img_div">
          <div className="image-container">
            <div className="floating-elements">
              <div className="floating-icon tech-icon">⚛️</div>
              <div className="floating-icon code-icon">💻</div>
              <div className="floating-icon rocket-icon">🚀</div>
              <div className="floating-icon star-icon">⭐</div>
            </div>
            <img src={DP} alt="Anuj Singh Display" className="dp_img" />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="testimonials_section">
        <div className="testimonials_header">
          <h3 className="testimonials_title">⭐ What Colleagues Say</h3>
        </div>
        <div className="testimonials_grid">
          <div className="testimonial_card">
            <div className="testimonial_content">
              <div className="quote_icon">💬</div>
              <p className="testimonial_text">
                "Anuj consistently delivers high-quality code and has an exceptional eye for detail. His React.js expertise helped our team ship features 30% faster."
              </p>
              <div className="testimonial_author">
                <div className="author_avatar">
                  <img src="https://api.dicebear.com/7.x/personas/svg?seed=ApoorvaWoman&backgroundColor=b6e3f4,c0aede,d1d4f9" alt="Apoorva Agarwal" className="avatar_img" />
                </div>
                <div className="author_info">
                  <div className="author_name">Apoorva Agarwal</div>
                  <div className="author_title">Frontend Lead • EPAM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial_card">
            <div className="testimonial_content">
              <div className="quote_icon">💬</div>
              <p className="testimonial_text">
                "Working with Anuj was a pleasure. He brings innovative solutions to complex problems and mentors junior developers beautifully."
              </p>
              <div className="testimonial_author">
                <div className="author_avatar">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=YoungNakul&backgroundColor=b6e3f4,c0aede,d1d4f9" alt="Nakul Patel" className="avatar_img" />
                </div>
                <div className="author_info">
                  <div className="author_name">Nakul Patel</div>
                  <div className="author_title">Product Owner • Infosys</div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial_card">
            <div className="testimonial_content">
              <div className="quote_icon">💬</div>
              <p className="testimonial_text">
                "Anuj's frontend skills are outstanding. His attention to user experience and performance optimization made our application shine."
              </p>
              <div className="testimonial_author">
                <div className="author_avatar">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=YoungApoorv&backgroundColor=b6e3f4,c0aede,d1d4f9" alt="Apoorv Srivastava" className="avatar_img" />
                </div>
                <div className="author_info">
                  <div className="author_name">Apoorv Srivastava</div>
                  <div className="author_title">Full Stack Lead • Infosys</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
