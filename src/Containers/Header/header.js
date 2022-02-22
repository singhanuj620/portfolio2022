import React from 'react'
import './header.css'
import DP from '../../Images/dp.png'
import NavbarComp from '../../Components/Navbar/navbar'
import { Button } from 'react-bootstrap';

const header = () => {
    return (
        // <div className="header_container" style={{
        //     backgroundImage: `url(${Waves})`, backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'
        // }}>
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
                        A young software engineer having skills in MERN stack web development and eager to explore more domains and skillsets.
                        I am a self-motivated, ambitious person with a creative, and adaptable nature.
                    </p>
                    <p>
                        Looking forward to meet you and take this opportunity to grow on a professional and personal level. 👋👋
                    </p>
                </div>
                <div className="header_btn_container">
                    <div>
                        <Button variant="primary" className="header_btn_div"><span className="header_btn">Download CV</span></Button>
                    </div>
                    <div>
                        <Button variant="warning" className="header_btn_div"><span className="header_btn">Projects</span></Button>
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