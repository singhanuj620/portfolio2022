import React from "react";
import "./about.css";
import { info } from "../../info.js";
import Tooltip from "@mui/material/Tooltip";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_content">
        <div className="section_header">
          <div className="section_icon">👨‍💻</div>
          <h2 className="section_title">About Me</h2>
          <p className="section_subtitle">Product-minded frontend engineer</p>
        </div>

        <div className="about_main">
          <div className="about_stats">
            <div className="stat_card">
              <div className="stat_number">6+</div>
              <div className="stat_label">Years Experience</div>
            </div>
            <div className="stat_card">
              <div className="stat_number">10+</div>
              <div className="stat_label">Regions Impacted</div>
            </div>
            <div className="stat_card">
              <div className="stat_number">20%</div>
              <div className="stat_label">Core Web Vitals Lift</div>
            </div>
            <div className="stat_card">
              <div className="stat_number">∞</div>
              <div className="stat_label">Learning Mode</div>
            </div>
          </div>

          <div className="about_split_content">
            <div className="about_left">
              <div className="about_timeline">
                <h3 className="timeline_title">🚀 Professional Journey</h3>
                <div className="modern_timeline">
                  {info.experience.map((item, index) => (
                    <div className="timeline_item" key={`${item.company}-${index}`}>
                      <div className="timeline_marker">
                        <div className="marker_dot">
                          <div className="marker_icon">{index === 0 ? "💼" : "💻"}</div>
                        </div>
                      </div>
                      <div className="timeline_content">
                        <div className="timeline_card">
                          <div className="timeline_header">
                            <h4 className="timeline_role">{item.role}</h4>
                            <span className="timeline_company">@ {item.company}</span>
                          </div>
                          <div className="timeline_period">{item.duration}</div>
                          <div className="timeline_description">
                            {item.client ? `Client: ${item.client}` : "Enterprise frontend engineering"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="timeline_item">
                    <div className="timeline_marker">
                      <div className="marker_dot">
                        <div className="marker_icon">🎓</div>
                      </div>
                    </div>
                    <div className="timeline_content">
                      <div className="timeline_card">
                        <div className="timeline_header">
                          <h4 className="timeline_role">{info.education.degree}</h4>
                          <span className="timeline_company">{info.education.institution}</span>
                        </div>
                        <div className="timeline_period">{info.education.duration}</div>
                        <div className="timeline_description">
                          Strong foundation in computer science and engineering fundamentals.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about_right">
              <div className="about_skills">
                <h3 className="skills_title">🛠️ Tech Stack</h3>
                <div className="skills_grid">
                  {info.skillsIcon.map((ele, index) => {
                    return (
                      <Tooltip title={ele.name} key={index} arrow>
                        <div className="skill_item">
                          <div className="skill_icon">
                            <img
                              src={ele.url}
                              alt={ele.name}
                              className="skill_img"
                            />
                          </div>
                          <span className="skill_name">{ele.name}</span>
                        </div>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
