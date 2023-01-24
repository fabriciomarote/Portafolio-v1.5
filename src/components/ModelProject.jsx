import React from "react";
import { FaGithub, FaPager } from "react-icons/fa";
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project } = props

    return (
            <div className="project-container wow animate__animated animate__flipInY animate__delay-0.5s">
                <img alt="imagen" className="image-project1" src={project.image1}></img>
                <img alt="imagen" className="image-project2" src={project.image2}></img>
                <div className="add-info">
                    <p className="title">{project.title}</p>
                    <p className="text">{project.text}</p>
                    <div className='box-techs'>
                        {project.techs.map(tech => {
                            return (
                                <div className="project-tech">
                                    <p>{tech}</p>
                                </div>
                            );
                        })}
                    </div> 
                    <div className='box-buttons'>
                        { project.link1 !== "" ? 
                        <a href={project.link1} className='button-project'><FaPager size={23}/>Sitio Web</a>
                        :
                        <div className="not-link1"/>
                        }
                        <a href={project.link2} className='button-project'><FaGithub size={23}/>Repositorio</a>
                    </div> 
                </div>
            </div>
    );
};
  
export default ModelProject;
