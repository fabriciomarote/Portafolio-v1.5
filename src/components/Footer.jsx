import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import WOW from 'wowjs';
import '../styles/Footer.css';

const Footer = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
        <>
            <div className="footer-container">
                <div className="text-footer wow animate__animated animate__zoomIn animate__delay-0.5s">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}  {"| Fabricio Marote"}
                    </p>
                </div>
                <div className="icons-footer wow animate__animated animate__zoomIn animate__delay-0.5s">
                    <a href="https://github.com/fabriciomarote" className='icon-f'><FaGithub size={30}/></a>
                    <a href="https://www.linkedin.com/in/fabricio-marote/" className='icon-f'><FaLinkedin size={30}/></a>
                </div>
            </div>
        </>
    );
};

export default Footer;