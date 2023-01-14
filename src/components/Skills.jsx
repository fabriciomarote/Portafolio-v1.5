import React, { useEffect } from 'react';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap, FaNode, FaJava } from "react-icons/fa";
import { DiMongodb, DiMysql, DiScrum, DiTrello } from "react-icons/di"; 
import { SiSpring, SiGradle, SiApachemaven, SiPostman, SiExpress, SiNeo4J} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import WOW from 'wowjs';
import '../styles/Skills.css';

const Skills = () => {

   useEffect(() => {
      new WOW.WOW({
        live: false
      }).init();
    }, [])
  
    return (
      <>
         <a name='habilidades' />
         <div className='skills-container'>
            <div className='title-box wow animate__animated animate__zoomIn'>
               <p>MIS HABILIDADES / CONOCIMIENTOS</p>
            </div> 
            <div className='box-icons wow animate__animated animate__zoomIn'>
               <div className='icon'>
                  <FaHtml5 size={100}/>
                  <p className="title-icon">HTML</p>
               </div>
               <div className='icon'>
                  <FaCss3Alt size={100}/>
                  <p className="title-icon">CSS</p>
               </div>
               <div className='icon'>
                  <FaBootstrap size={100}/>
                  <p className="title-icon">Bootstrap</p>
               </div>
               <div className='icon'>
                  <FaJs size={100}/>
                  <p className="title-icon">Javascript</p>
               </div>
               <div className='icon'>
                  <FaReact size={100}/>
                  <p className="title-icon">React</p>
               </div>
               <div className='icon'>
                  <FaJava size={100}/>
                  <p className="title-icon">Java</p>
               </div>
               <div className='icon'>
                  <TbBrandKotlin size={100}/>
                  <p className="title-icon">Kotlin</p>
               </div>
               <div className='icon'>
                  <FaNode size={100}/>
                  <p className="title-icon">Node JS</p>
               </div>
               <div className='icon'>
                  <SiExpress size={100}/>
                  <p className="title-icon">Express</p>
               </div>
               <div className='icon'>
                  <DiMysql size={100}/>
                  <p className="title-icon">Mysql</p>
               </div>
               <div className='icon'>
                  <DiMongodb size={100}/>
                  <p className="title-icon">MongoDB</p>
               </div>
               <div className='icon'>
                  <SiNeo4J size={100}/>
                  <p className="title-icon">Neo4J</p>
               </div>
               <div className='icon'>
                  <SiSpring size={100}/>
                  <p className="title-icon">Spring Boot</p>
               </div>
               <div className='icon'>
                  <SiApachemaven size={100}/>
                  <p className="title-icon">Maven</p>
               </div>
               <div className='icon'>
                  <SiGradle size={100}/>
                  <p className="title-icon">Gradle</p>
               </div>
               <div className='icon'>
                  <DiTrello size={100}/>
                  <p className="title-icon">Trello</p>
               </div>
               <div className='icon'>
                  <SiPostman size={100}/>
                  <p className="title-icon">Postman</p>
               </div>
               <div className='icon'>
                  <DiScrum size={100}/>
                  <p className="title-icon">Scrum</p>
               </div>
               <div className='icon'>
                  <FaGithub size={100}/>
                  <p className="title-icon">Github</p>
               </div>
               <div className='icon'>
                  <FaGitAlt size={100}/>
                  <p className="title-icon">Git</p>
               </div>
            </div> 
         </div>
      </>
    );
  }
  
  export default Skills;