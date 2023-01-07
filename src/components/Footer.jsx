import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeProvider } from 'styled-components';
import { FooterContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import '../styles/Footer.css';

const Footer = () => {

    return (
        <>
                <div className="footer-container">
                    <div className="text-footer">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()}  {"| Fabricio Marote"}
                        </p>
                    </div>
                    <div className="icons-footer">
                        <a href="https://github.com/fabriciomarote" className='icon-f'><FaGithub size={35}/></a>
                        <a href="https://www.linkedin.com/in/fabricio-marote/" className='icon-f'><FaLinkedin size={35}/></a>
                    </div>
                </div>
        </>
    );
};

export default Footer;