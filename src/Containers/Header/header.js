import React from 'react'
import './header.css'
import DP from '../../Images/dp.png'
import NavbarComp from '../../Components/Navbar/navbar'
import { Button } from 'react-bootstrap';

const header = () => {
    return (
        <div className="header_container">
            <NavbarComp />
            <div className="header_text_div">
                <div className="header_title">
                    <div>Anuj</div>
                    <div>Singh</div>
                </div>
                <br></br>
                <div className="header_description">
                    <p>
                    Experienced software engineer with 2.7 years of professional expertise in frontend web development, specializing in React JS. Proficient in utilizing cutting-edge React concepts and techniques, including Redux for state management and Jest for unit testing. Skilled in developing scalable and maintainable code structures, ensuring optimal performance and seamless user experiences. Demonstrated ability to collaborate effectively in cross-functional teams, adept at leveraging React components, hooks, and state management libraries like Redux to build robust applications. Experienced in writing comprehensive unit tests using Jest to ensure code quality and reliability. Committed to staying updated with the latest trends and best practices in React development.
                    </p>
                    <p>
                        Looking forward to meet you and take this opportunity to grow on a professional and personal level. 👋👋
                    </p>
                </div>
                <div className="header_btn_container">
                    <div>
                        <Button variant="primary" className="header_btn_div"><span className="header_btn"><a href="https://drive.google.com/file/d/1IJs3MkQlTwzyf-EdcytPNLVDSeO91X-o/view?usp=share_link" className="link" target="_blank">Download CV</a></span></Button>
                    </div>
                    <div>
                        <Button variant="warning" className="header_btn_div"><span className="header_btn"><a href="#projects" className="link">Projects</a></span></Button>
                    </div>
                    <div>
                        <Button variant="warning" className="header_btn_div"><span className="header_btn"><a href="#blogs" className="link">Blogs</a></span></Button>
                    </div>
                    <div>
                        <Button variant="primary" className="header_btn_div"><span className="header_btn"><a href="#contact" className="link">Contact</a></span></Button>
                    </div>
                </div>
            </div>
            <div className="header_img_div">
                <div>
                    <img src={DP} alt="Anuj Singh Display" className="dp_img" />
                </div>
            </div>
        </div>
    )
}

export default header