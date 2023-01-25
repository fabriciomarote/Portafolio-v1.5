import React, { useState } from "react";
import styled from 'styled-components'
import Modal from "../components/Modal"
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project } = props

    const [stateModal, setStateModal] = useState(false);

    return (
            <div className="modelProject-container wow animate__animated animate__flipInY animate__delay-0.5s">
                <img alt="imagen" className="image-project1" src={project.image1}></img>
                <img alt="imagen" className="image-project2" src={project.image2}></img>
                <div className="add-info">
                    <p className="title">{project.title}</p>
                    <p className="text">{project.text}</p>
                    
                    <a href={`/projects/${project.id}`} className='button-project'>Ver mas</a>
                </div>
            </div>
    );
};
  
export default ModelProject;
