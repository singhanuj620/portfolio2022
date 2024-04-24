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
          <div>
            <img
              src="https://img.icons8.com/bubbles/80/null/new-post.png"
              alt="anuj_email"
            />
          </div>
          <div>singhanuj620@gmail.com</div>
        </div>
        <div className="contact_info">
          <img
            src="https://img.icons8.com/fluency/80/null/linkedin-circled.png"
            alt="anuj_linkedin"
          />{" "}
          linkedin.com/in/anuj-singh-007
        </div>
        <div className="contact_info">
          <img
            src="https://img.icons8.com/3d-fluency/80/null/github.png"
            alt="anuj_github"
          />{" "}
          github.com/singhanuj620
        </div>
        <div className="contact_info">
          <img
            src="https://img.icons8.com/bubbles/80/null/hand-with-pen.png"
            alt="anuj_devto"
          />{" "}
          dev.to/singhanuj620
        </div>
      </div>
    </div>
  );
};

export default Contact;
