import { React, useState } from "react";
import './contactComponent.css'

function ContactComponent() {
  return (
    <section className="contact-footer-body">
      <div>
        <h4 className="text-white BebasNeue">CONTACTAME</h4>
      </div>
      <div>
        <div>
          <div>
            <p className="NotoSans text-white">Nombre</p>
            <input
              className="text-gray"
              type="text"
              placeholder="escribe tu respuesta"
            ></input>
          </div>
          <div>
            <p className="NotoSans text-white">Correo</p>
            <input
              className="text-gray"
              type="text"
              placeholder="escribe tu respuesta"
            ></input>
          </div>
        </div>
        <div>
          <p className="NotoSans text-white">¿Porque quieres contactarme?</p>
          <input
            className="text-gray"
            type="text"
            placeholder="escribe tu respuesta"
          ></input>
        </div>
      </div>
      <div>
        <button className="contact-footer-body--button BebasNeue">Enviar</button>
      </div>
    </section>
  );
}

export default ContactComponent;
