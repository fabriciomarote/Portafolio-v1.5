import React, { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeProvider } from 'styled-components';
import { NavBarContainer } from "./theme/Changes";
import logo from '../assets/img/logos/logo-dark.png';
import Themes from './theme/Themes'
import '../styles/NavBar.css';

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const changeMode = () => {
        let colour;
        if (theme === 'light') {
            setTheme('dark');
            colour = 'dark';
        } else {
            setTheme('light');
            colour = 'light';
        }
        localStorage.setItem('theme', colour);
    }

    return (
        <>
            <div className="navbar-container">
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-title">  
                            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="theme-1">
                        <div className='icon-theme' onClick={() => changeMode()}>
                            { theme === "dark" ? <BsFillSunFill  className='icon-dark' size={35}/> : <BsFillMoonFill className='icon-light' size={35}/>}
                        </div>
                    </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links"> 
                        <a href="#inicio" className="btn-btn" >Inicio</a>
                        <a href="#sobreMi" className="btn-btn" >Sobre mí</a>
                        <a href="#habilidades" className="btn-btn" >Habilidades</a>
                        <a href="#proyectos" className="btn-btn">Proyectos</a>
                        <a href="#contacto" className="btn-btn"> Contacto</a> 
                    </div>
                    <div className="theme-2">
                        <div className='icon-theme' onClick={() => changeMode()}>
                            { theme === "dark" ? <BsFillSunFill  className='icon-dark' size={35}/> : <BsFillMoonFill className='icon-light' size={35}/>}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Navbar;