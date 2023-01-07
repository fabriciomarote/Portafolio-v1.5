import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContactContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import '../styles/Contact.css';

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        asunto: "",
        message: ""
    });

    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      };
  
    return (
        <>
                <a name='contacto' />
                <div className='contact-container'>
                    <p className='title-box'> CONTACTAME</p>
                    <div className='box-form'>
                        <form className='formModal'>
                            <div className='form-top'>
                                <input className="form-input" type='text' name="name" value={data.name} onChange={handleChange("name")} placeholder="Nombre" required  ></input>    
                                <input className="form-input" type='text' name="email" value={data.email} onChange={handleChange("email")}placeholder="Email" required></input> 
                            </div>
                            <input className="form-input" type='text' name="asunto" value={data.asunto} onChange={handleChange("asunto")}placeholder="Asunto" required></input> 
                            <input className="form-input" id='message' type='text' name="message" value={data.message} onChange={handleChange("message")}placeholder="Escribe tu mensaje aquí..." required></input> 
                            <button type="submit" className="btn btn-info">Enviar</button>
                        </form>
                    </div>
                </div>
        </>
    );
  }
  
  export default Contact;