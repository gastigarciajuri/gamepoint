import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./FormContac.css";

export default function FormContact() {
 
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container">
        <form
    
          className="contactForm"
          action="https://getform.io/f/17bf55ba-d9a5-42b7-8c50-4fc0b74f01d6"
          method="POST"
        >
          <div>
            <h1 className="title">Formulario de contacto</h1>
            <label className="name">Nombre:</label>
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              className="inputName"
              required="required"  data-error="El nombre es requerido."
            />
            <label className="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              className="inputEmail"
               required="required"  data-error="El email es requerido."
            />
            <label className="phone">Teléfono:</label>
            <input
              type="tel"
              name="tel"
              placeholder="Ingrese su número"
              className="inputNumber"
              required="required"  data-error="El número es requerido."
            />
            <label className="message">Mensaje:</label>
            <textarea
              name="mensaje"
              placeholder="Escriba su mensaje"
              className="inputMessage"
              required="required"  data-error="El mensaje es requerido."
            ></textarea>
            <Link to="/">
              <button className="btn_back">Volver</button>
            </Link>
           
            <input type="submit" className="btn_send" value="Enviar" />
            
          </div>
        </form>
      </div>
    </div>
  );
}
