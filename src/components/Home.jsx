import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from "./theme/Changes";
import Themes from './theme/Themes'

import '../styles/Home.css';

const Home = () => {

    return (
        <>
            <a name='inicio' />
            <div className='home-container'>
                <div className='box-home'>
                        <span>Hola,</span>
                        <span>Soy Fabricio.</span>
                        <span className='span1'>Desarrollador Web</span>
                        <span className='span1'>Full Stack</span>
                </div> 
            </div>
        </>
    );
  }
  
  export default Home;