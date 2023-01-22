import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logo from '../assets/img/logos/logo.png';
import '../styles/NavBar.css';

const Navbar = ( props ) => {

    const { theme, setTheme } = props;

    const changeMode = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    return (
        <>
            <div className="navbar-container" data-theme={theme}>
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-title">  
                            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <div className="theme-1">
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillMoonFill className='icon-dark' size={35}/> : <BsFillSunFill className='icon-light' size={35}/>}
                            </div>
                        </div>

                        <label className="nav-check" htmlFor="nav-check">
                            <div></div>
                            <div></div>
                            <div></div>
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
                            { theme === "dark" ? <BsFillMoonFill  className='icon-dark' size={35}/> : <BsFillSunFill className='icon-light' size={35}/>}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Navbar;