import React, { useState, useEffect } from 'react';
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import WOW from 'wowjs';
import '../styles/Projects.css';

const Proyects = () => {

    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextProject = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
    const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };


    useEffect(() => {
        if (!Array.isArray(projects) || projects.length <= 0) {
            return null;
        };
    }, []) 
      
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
                    <div className='box-projects'>
                        <MdArrowBackIosNew className='left-arrow' onClick={prevProject} />
                        <MdArrowForwardIos className='right-arrow' onClick={nextProject} />
                        { projects.map((project, index) => {
                            return (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && ( 
                                        <ModelProject key={project.id} project={project}/>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Proyects;