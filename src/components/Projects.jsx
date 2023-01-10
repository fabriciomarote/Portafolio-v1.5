import React from 'react';
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import '../styles/Projects.css';

const Proyects = () => {
  

    return (
        <>
            <a name='proyectos'/>
            <div className='projects-box-container'>
                <div className='title-box animate__animated animate__zoomIn'>
                    <p>MIS PROYECTOS</p>
                </div> 
                <div className='box-home'>
                    <div className='box-projects'>
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