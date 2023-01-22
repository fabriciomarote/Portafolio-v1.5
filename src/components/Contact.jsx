import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import '../styles/Contact.css';

const Contact = ( props ) => {

    const { theme } = props;

    const [data, setData] = useState({
        name: "",
        email: "",
        asunto: "",
        message: ""
    });

    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      };

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])  
  
    return (
        <>
            <a name='contacto' />
            <div className='contact-container' data-theme={theme}>
                <p className='title-box wow animate__animated animate__zoomIn'> CONTACTAME</p>
                <div className='box-form wow animate__animated animate__zoomIn'>
                    <form className='formModal'>
                        <div className='form-top'>
                            <input className="form-input" type='text' name="name" value={data.name} onChange={handleChange("name")} placeholder="Nombre" required  ></input>    
                            <label>Nombre</label>
                            <input className="form-input" type='text' name="email" value={data.email} onChange={handleChange("email")}placeholder="Email" required></input> 
                            <label>Email</label>
                        </div>
                        <input className="form-input" type='text' name="asunto" value={data.asunto} onChange={handleChange("asunto")}placeholder="Asunto" required></input> 
                        <label>Asunto</label>
                        <textarea className="form-input" id='message' name="message" value={data.message} onChange={handleChange("message")}placeholder="Escribe tu mensaje aquí..." required></textarea> 
                        <label>Nombre</label>
                        <button type="submit" className="btn btn-info">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
  }
  
  export default Contact;