import React from 'react';
import '../styles/Home.css';

const Home = ( props ) => {

    const { theme } = props;

    return (
        <>
            <a name='inicio'/>
            <div className='home-container' data-theme={theme}>
                <div className='box-home animate__animated animate__lightSpeedInLeft animate__delay-1s' >
                        <span>Hola,</span>
                        <span >Soy Fabricio.</span>
                        <span className='span1'>Desarrollador Web</span>
                        <span className='span1'>Full Stack</span>
                </div> 
            </div>
        </>
    );
  }
  
  export default Home;

  /*

    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../assets/img/fondos/background.jpg);
    background-size: cover;
    background-position: center center;
    height: 100vh;

  */