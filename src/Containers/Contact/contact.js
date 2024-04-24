import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_title">
        <div></div>Contact
      </div>
      <div className="contact_div">
        <div className="contact_info">
          <div className="contact_icon_div">
            <img
              src="https://img.icons8.com/bubbles/80/null/new-post.png"
              alt="anuj_email"
              className="contact_icon_img"
            />
          </div>
          <div className="contact_info_title">
          <a href="mailto:singhanuj620@gmail.com" alt="singhanuj620@gmail.com" style={{ textDecoration: "none"}}>singhanuj620@gmail.com</a></div>
        </div>
        <div className="contact_info">
          <div className="contact_icon_div">
            <img
              src="https://img.icons8.com/fluency/80/null/linkedin-circled.png"
              alt="anuj_linkedin"
              className="contact_icon_img"
            />
          </div>
          <div className="contact_info_title">
            <a
              href="https://linkedin.com/in/anuj-singh-007"
              alt="linkedin.com/in/anuj-singh-007"
              style={{ textDecoration: "none" }}
            >
              linkedin.com/in/anuj-singh-007
            </a>
          </div>
        </div>
        <div className="contact_info">
          <div className="contact_icon_div">
            <img
              src="https://img.icons8.com/3d-fluency/80/null/github.png"
              alt="anuj_github"
              className="contact_icon_img"
            />
          </div>
          <div className="contact_info_title">
            <a
              href="https://github.com/singhanuj620"
              alt="github.com/singhanuj620"
              style={{ textDecoration: "none" }}
            >
              github.com/singhanuj620
            </a>
          </div>
        </div>
        <div className="contact_info">
          <div className="contact_icon_div">
            <img
              src="https://img.icons8.com/bubbles/80/null/hand-with-pen.png"
              alt="anuj_devto"
              className="contact_icon_img"
            />
          </div>
          <div className="contact_info_title">
            <a
              href="https://dev.to/singhanuj620"
              alt="dev.to/singhanuj620"
              style={{ textDecoration: "none" }}
            >
              dev.to/singhanuj620
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
