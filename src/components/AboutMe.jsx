import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AboutMeContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import foto from '../assets/img/foto.jpeg'; 
import '../styles/AboutMe.css';

const AboutMe = () => {
  
    return (
        <>
            <a name='sobreMi' />
            <div className='about-container'>
                <div className='title-box animate__animated animate__slideInDown'>
                    <p>SOBRE MÍ</p>
                </div> 
                <div className='box-image'>
                    <img className='foto' src={foto} alt="logo" />
                </div> 
                <div className='text-box animate__animated animate__jackInTheBox'>    
                    <p>Tengo 29 años, soy de Buenos Aires, Argentina. Actualmente me encuentro estudiando la carrera de Licenciatura en Informática en la Universidad Nacional de Quilmes. Durante mi carrera he desarrollado varios proyectos utilizando diferentes lenguajes y tecnologías, tengo experiencia y un buen manejo en lo que respecta al trabajo en equipo, además he trabajado y tengo conocimientos sobre las metodologías ágiles (SCRUM). Me he interesado y especializado además de forma autodidacta en el desarrollo de aplicaciones web.</p>
                </div>
                <div className='box-cv animate__animated animate__pulse animate__infinite'>
                    <a href="https://drive.google.com/file/d/1OrfC8WAUbFl8Q8cNExuSAC7sUr38Dyzm/view?usp=sharing" className='button-cv'>Visualizar mi CV</a> 
                </div> 
            </div>
        </>  
    );
  }
  
  export default AboutMe;