/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { debounce } from "../../Utilities/helper";
import { Button } from "react-bootstrap";
import "./navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarComp = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "95%",
    backgroundColor: "#4094F8",
    borderRadius: "5px",
    transition: "top 0.6s",
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    boxShadow: "0px 0px 5px #000000",
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      // set state based on location info (explained in more detail below)
      setVisible(
        (prevScrollPos < currentScrollPos &&
          prevScrollPos - currentScrollPos > 150) ||
          currentScrollPos > 500
      );

      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      style={{
        ...navbarStyles,
        top: visible && window.innerWidth > 600 ? "0" : "-60px",
      }}
    >
      <div className="navbar_detail_container">
        <div className="navbar_title">
          <a href="#" className="link navbar-title">
            Anuj Singh{" "}
          </a>
        </div>
        <div className="navbar_tabs tabs_hover">
          {" "}
          <a href="#projects" className="link">
            {`< Projects />`}{" "}
          </a>
        </div>
        <div className="navbar_tabs tabs_hover">
          {" "}
          <a href="#blogs" className="link">
            {`< Blogs />`}{" "}
          </a>
        </div>
        <div className="navbar_tabs tabs_hover">
          {" "}
          <a href="#about" className="link">
            {`< About />`}{" "}
          </a>
        </div>
        <div className="navbar_tabs navbar_socials_container">
          <div
            className="navbar_icon tabs_hover"
            onClick={() =>
              window.open("//www.github.com/singhanuj620", "_blank")
            }
          >
            {" "}
            <div>
              <FaGithub />{" "}
            </div>
          </div>
          <div
            className="navbar_icon tabs_hover"
            onClick={() =>
              window.open("//www.linkedin.com/in/anuj-singh-007", "_blank")
            }
          >
            {" "}
            <div>
              <FaLinkedin />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_btn_container">
        <Button variant="warning" className="navbar_btn">
          <a
            href="https://drive.google.com/file/d/1IJs3MkQlTwzyf-EdcytPNLVDSeO91X-o/view?usp=share_link"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </Button>
        <Button variant="warning" className="navbar_btn">
          <a href="#contact" className="link">
            Contact
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavbarComp;
