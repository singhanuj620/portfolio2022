import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactInfo = [
    {
      id: 1,
      icon: "✉️",
      title: "Email",
      link: "mailto:singhanuj620@gmail.com",
      display: "singhanuj620@gmail.com",
      description: "Drop me a line anytime!"
    },
    {
      id: 2,
      icon: "💼",
      title: "LinkedIn",
      link: "https://linkedin.com/in/anuj-singh-007",
      display: "anuj-singh-007",
      description: "Let's connect professionally"
    },
    {
      id: 3,
      icon: "🚀",
      title: "GitHub",
      link: "https://github.com/singhanuj620",
      display: "singhanuj620",
      description: "Check out my code adventures"
    },
    {
      id: 4,
      icon: "📝",
      title: "Dev.to",
      link: "https://dev.to/singhanuj620",
      display: "singhanuj620",
      description: "Read my latest tech thoughts"
    }
  ];

  return (
    <div className="contact_container" id="contact">
      <div className="contact_content">
        <div className="contact_header">
          <div className="section_icon">🤝</div>
          <h2 className="section_title">Let's Connect</h2>
          <p className="section_description">
            Have a project in mind or just want to chat about tech? I'd love to hear from you!
          </p>
        </div>
        
        <div className="contact_grid">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              className={`contact_card ${hoveredCard === contact.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="contact_icon">
                <span>{contact.icon}</span>
              </div>
              <div className="contact_details">
                <h3 className="contact_title_text">{contact.title}</h3>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_link"
                >
                  {contact.display}
                </a>
                <p className="contact_description">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact_cta">
          <div className="cta_card">
            <h3>Ready to start something amazing?</h3>
            <p>I'm always excited to work on new projects and collaborate with fellow developers.</p>
            <a 
              href="mailto:singhanuj620@gmail.com" 
              className="primary_cta_btn"
            >
              <span className="btn_icon">🚀</span>
              <span className="btn_text">Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
