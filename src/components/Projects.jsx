import React, { useEffect } from 'react';
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import WOW from 'wowjs';
import '../styles/Projects.css';

const Proyects = () => {
  
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])  

    return (
        <>
            <a name='proyectos'/>
            <div className='projects-box-container'>
                <div className='title-box wow animate__animated animate__zoomIn'>
                    <p>MIS PROYECTOS</p>
                </div> 
                <div className='box-home'>
                    <div className='box-projects wow animate__animated animate__zoomIn'>
                        { projects.map( project => {
                            return <ModelProject key={project.id} project={project}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Proyects;