import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { FaGithub, FaPager } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import projects from "../data/Projects.js";
import NavBar from '../components/NavBar.jsx';
import useLocalStorage from 'use-local-storage';
import '../styles/Project.css';
import styled from 'styled-components';
import Modal from "./Modal.jsx";

const Project = () => {

    const { idProject } = useParams();

    const [project, setProject] = useState([]);
    const [techsProject, setTechsProject] = useState([]);
    const [imagesProject, setImagesProject] = useState([]);
    const [image, setImage] = useState([]);

    const [stateModal, setStateModal] = useState(false);

    const [current, setCurrent] = useState(0);
    const length = imagesProject != undefined ? imagesProject.length : "";


    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const disabled1 = project.link1 == null ? "not-active" : "";
    const disabled2 = project.link2 == null ? "not-active" : "";

    const nextProject = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
    const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const projectById = (id) => {
        let pj;
        projects.find( project => {
            if (project.id == id) {
                pj = project;
            }    
            }); 
        return pj
    };

    useEffect(() => {
        setProject(projectById(idProject));
        setTechsProject(project.techs);
        setImagesProject(project.images);
    }, [idProject, project]);

    const imagesByProject = () => {
        if (techsProject != undefined) {
            return (
                <>
                    <RxDoubleArrowLeft className='arrow-left' onClick={prevProject} />
                    <RxDoubleArrowRight className='arrow-right' onClick={nextProject} />
                    {imagesProject.map((image, index) => {
                            return (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && ( 
                                <>
                                    <img alt="imagen" className="p-image" src={image} onClick={() => setStateModal(!stateModal)} />
                                    <Modal image={image} state={stateModal} setState={setStateModal} />
                                </>
                                )}
                                
                                </div>
                            );
                    })}
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    const techsByProject = () => {
        if (techsProject != undefined) {
            return (
                <>
                
                    {techsProject.map(tech => {
                            return (
                                <div className="project-tech hvr-float-shadow">
                                    <p>{tech}</p>
                                </div>
                            );
                    })}
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    return (
        <>
            <div className="navbar">
                    <NavBar theme={theme} setTheme={setTheme} />
            </div> 
            <div className="project-container" data-theme={theme}>
                <div className="box-project">    
                    <p className="title-project">{project.title}</p>
                    <div className="images-container">
                        {imagesByProject()} 
                        
                    </div>

                    <p className="text-project">{project.text}</p>
                    <p className="techs">Tecnologias utilizadas:</p>
                    <div className='box-techs'>
                        {techsByProject()} 
                    </div> 
                    <div className='box-buttons'>
                        <a href={project.link1} className='button-project hvr-bounce-to-right' id={disabled1}><FaPager size={23}/>Sitio Web</a>
                        <a href={project.link2} className='button-project hvr-bounce-to-right' id={disabled2}><FaGithub size={23}/>Repositorio</a>
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Project;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;