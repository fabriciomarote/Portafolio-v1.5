import React from "react";
import { FaGithub, FaPager } from "react-icons/fa";
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project } = props

    return (
        <>
                <div className="project-container wow animate__animated animate__flipInY animate__delay-0.5s">
                    <img alt="imagen" className="image-project" src={project.image}></img>
                    <div className="add-info">
                        <p className="title">{project.title}</p>
                        <p className="text">{project.text}</p>
                        <div className='box-buttons'>
                            { project.link1 !== "" ? 
                            <a href={project.link1} className='button-project'><FaPager size={23}/>Ver proyecto</a>
                            :
                            <div className="not-link1"/>
                            }
                            <a href={project.link2} className='button-project'><FaGithub size={23}/>Ver código</a>
                        </div> 
                    </div>
                </div>
        </>  
    );
};
  
export default ModelProject;
