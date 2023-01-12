import React, { useEffect } from 'react';
import foto from '../assets/img/foto.jpeg'; 
import WOW from 'wowjs';
import '../styles/AboutMe.css';

const AboutMe = ( props ) => {

    const { theme } = props;

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  
    return (
        <>
            <a name='sobreMi' />
            <div className='about-container' data-theme={theme}>
                <div className='title-box span1 wow animate__animated animate__zoomIn animate__delay-0.5s'>
                    <p>SOBRE MÍ</p>
                </div> 
                <div className='box-image wow animate__animated animate__zoomIn animate__delay-0.5s'>
                    <img className='foto' src={foto} alt="logo" />
                </div> 
                <div className='text-box span1 wow animate__animated animate__zoomIn animate__delay-0.5s'>    
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