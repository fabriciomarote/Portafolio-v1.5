import React, { useState } from 'react'
import { ContainerGeneral } from './components/theme/Changes';
import { ThemeProvider } from 'styled-components';
import Themes from './components/theme/Themes'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
      <div>
        <div className="navbar">
          <NavBar />
        </div> 
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact  />
        <Footer /> 
      </div> 
  );
};

export default App;
