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
          <p className="section_subtitle">My journey in tech & beyond</p>
        </div>
        
        <div className="about_main">
          <div className="about_stats">
            <div className="stat_card">
              <div className="stat_number">5+</div>
              <div className="stat_label">Years Experience</div>
            </div>
            <div className="stat_card">
              <div className="stat_number">50+</div>
              <div className="stat_label">Projects Built</div>
            </div>
            <div className="stat_card">
              <div className="stat_number">15+</div>
              <div className="stat_label">Tech Articles</div>
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
                  <div className="timeline_item">
                    <div className="timeline_marker">
                      <div className="marker_dot">
                        <div className="marker_icon">💼</div>
                      </div>
                    </div>
                    <div className="timeline_content">
                      <div className="timeline_card">
                        <div className="timeline_header">
                          <h4 className="timeline_role">Specialist Programmer Level 2</h4>
                          <span className="timeline_company">@ Infosys Ltd</span>
                        </div>
                        <div className="timeline_period">2022 - Present</div>
                        <div className="timeline_description">
                          Advanced full-stack development, leading technical initiatives and mentoring junior developers.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline_item">
                    <div className="timeline_marker">
                      <div className="marker_dot">
                        <div className="marker_icon">💻</div>
                      </div>
                    </div>
                    <div className="timeline_content">
                      <div className="timeline_card">
                        <div className="timeline_header">
                          <h4 className="timeline_role">Specialist Programmer</h4>
                          <span className="timeline_company">@ Infosys Ltd</span>
                        </div>
                        <div className="timeline_period">2020 - 2022</div>
                        <div className="timeline_description">
                          Full-stack development with ReactJS, Node.js, and modern web technologies.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline_item">
                    <div className="timeline_marker">
                      <div className="marker_dot">
                        <div className="marker_icon">🎓</div>
                      </div>
                    </div>
                    <div className="timeline_content">
                      <div className="timeline_card">
                        <div className="timeline_header">
                          <h4 className="timeline_role">Bachelor of Technology</h4>
                          <span className="timeline_company">Computer Science Engineering</span>
                        </div>
                        <div className="timeline_period">2016 - 2020</div>
                        <div className="timeline_description">
                          AICTE - All India Council for Technical Education. Strong foundation in computer science fundamentals.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline_item">
                    <div className="timeline_marker">
                      <div className="marker_dot">
                        <div className="marker_icon">📚</div>
                      </div>
                    </div>
                    <div className="timeline_content">
                      <div className="timeline_card">
                        <div className="timeline_header">
                          <h4 className="timeline_role">Higher Secondary Education</h4>
                          <span className="timeline_company">St. Mary's School</span>
                        </div>
                        <div className="timeline_period">2015</div>
                        <div className="timeline_description">
                          Intermediate education with focus on science and mathematics.
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
