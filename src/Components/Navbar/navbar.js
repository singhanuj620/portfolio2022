import React, { useState, useEffect } from "react";
import { debounce } from "../../Utilities/helper";
import "./navbar.css";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { info } from "../../info";

const NavbarComp = () => {
  const { profile } = info;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos < currentScrollPos &&
          prevScrollPos - currentScrollPos > 150) ||
          currentScrollPos > 500
      );

      setPrevScrollPos(currentScrollPos);

      // Update active section based on scroll position
      const sections = [
        { id: 'home', element: document.querySelector('.header_container') },
        { id: 'about', element: document.querySelector('.about_container') },
        { id: 'projects', element: document.querySelector('.projects_container') },
        { id: 'blogs', element: document.querySelector('.blogs_container') },
        { id: 'contact', element: document.querySelector('.contact_container') }
      ];

      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Section is considered active if it's within the viewport (top half)
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    
    // Set initial active section
    const initialCheck = () => {
      if (window.pageYOffset === 0) {
        setActiveSection('home');
      }
    };
    initialCheck();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const navLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#blogs", label: "Blogs", icon: "📝" },
    { href: "#contact", label: "Contact", icon: "📞" }
  ];

  return (
    <nav className={`modern_navbar ${visible ? 'navbar_visible' : 'navbar_hidden'}`}>
      <div className="navbar_content">
        {/* Brand/Logo */}
        <div className="navbar_brand">
          <a href="#home" className="brand_link">
            <span className="brand_icon">✨</span>
            <span className="brand_text">Anuj Singh</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="navbar_links">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className={`nav_link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              <span className="nav_icon">{link.icon}</span>
              <span className="nav_text">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="navbar_socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social_link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social_link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="navbar_actions">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action_btn secondary_btn"
          >
            <FaDownload />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="action_btn primary_btn"
          >
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
