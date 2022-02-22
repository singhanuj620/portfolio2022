import React, { useState, useEffect } from 'react';
import { debounce } from '../../Utilities/helper';
import { Button } from 'react-bootstrap';
import './navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavbarComp = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '95%',
        backgroundColor: '#4094F8',
        borderRadius: '5px',
        transition: 'top 0.6s',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 10px',
        boxShadow: '0px 0px 5px #000000'
    }

    useEffect(() => {
        const handleScroll = debounce(() => {
            // find current scroll position
            const currentScrollPos = window.pageYOffset;

            // set state based on location info (explained in more detail below)
            setVisible((prevScrollPos < currentScrollPos && prevScrollPos - currentScrollPos > 150) || currentScrollPos > 500);

            // set state to new scroll position
            setPrevScrollPos(currentScrollPos);
        }, 100)
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible]);

    return (
        <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            <div className="navbar_detail_container">
                <div className="navbar_title">Anuj Singh</div>
                <div className="navbar_tabs"> {`< Projects />`} </div>
                <div className="navbar_tabs"> {`< About />`} </div>
                <div className="navbar_tabs navbar_socials_container">
                    <div className="navbar_icon"> <div><FaGithub /> </div></div>
                    <div className="navbar_icon"> <div><FaLinkedin /> </div></div>
                </div>
            </div>
            <div className="navbar_btn_container">
                <Button variant="warning" className="navbar_btn">Download CV</Button>
                <Button variant="warning" className="navbar_btn">Contact</Button>
            </div>
        </div>
    );
};

export default NavbarComp;