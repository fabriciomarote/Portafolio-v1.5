import React, { useState } from 'react'
import styled from 'styled-components';

const Modal = () => {


  return ( 
    <>
        <Overlay>
          <ContenedorModal>
            <Contenido>
            </Contenido>
          </ContenedorModal>
        </Overlay>
    </>
  )
}

export default Modal;

  const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.9);     
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;  
  `;

  const ContenedorModal = styled.div`
    width: 100px;
    min-height: 50px;
    background: rgba(24, 22, 80, 0.9);
    position: relative;
    border-radius:5px;
    box-shadow: rgba(100,100,11, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    padding-left: 40px;
    @media (max-width:600px) {
      height: 550px;
      width: 500px;
    }
  `;

  const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    h2 {
      font-weight: 500;
      font-size: 28px;
      color: white(0,0,0);
      text-indent: 0px;
      @media (max-width:600px) {
        font-weight: 700;
        font-size: 20px;
    }
    }
  `;

  const Boton = styled.button`
    display: block;
    width: 130px;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    border: none;
    margin: 20px;
    font-size: 15px;
    border-color:#A9D35A;
    background-color:#A9D35A;
    color:black;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    transition: .3s ease all;
    &:hover {
      border-color:#26B5A8;
      background-color:#26B5A8;
      color: white;
    }
    @media (max-width:600px) {
      height: 35px;
      width: 100px;
    }
  `;

  const BotonCerrar = styled.div`
    position: absolute;
    top: 17px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: white(0,0,0);
    svg {
      width: 80%;
      height: 80%;
    }
  `;

  const BotonesConfirmacion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  `;

  const Contenido = styled.div`
  text-indent: 10px;
    @media (max-width:600px) {
        font-weight: 500;
        font-size: 12px;
        text-indent: 10px
    }
  `;