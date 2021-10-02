import { React, useState } from "react";
import "./contactComponent.css";

function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const url = "https://portfolio-back-heroku.herokuapp.com/api/email/send";
  const sendEmail = async () => {
    if (name === "" || email === "" || message === "") {
      return alert("Please fill all the fields");
    } else {
      const reponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email: email, subject: name, message }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await reponse.json();
      console.log(data);
    }
  };
  return (
    <section className="contact-footer-body">
      <div>
        <h4
          id="contact"
          className="contact-body-title text-white BebasNeue fw-bold"
        >
          CONTACTAME
        </h4>
      </div>
      <div className="d-flex contact-footer-body--inputs-container">
        <div className="contact-footer-body--info-inputs">
          <div className="mb-3">
            <label
              for="formGroupExampleInput"
              className="form-label NotoSans text-white"
            >
              Nombre
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Escribe tu Nombre"
            />
          </div>
          <div className="mb-3">
            <label
              for="formGroupExampleInput"
              className="form-label NotoSans text-white"
            >
              Correo
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Escribe tu Correo"
            />
          </div>
        </div>
        <div className="contact-footer-body--info-inputs">
          <div className="form-floating">
            <label
              for="formGroupExampleInput"
              className="form-label NotoSans text-white"
            >
              ¿Porque quieres contactarme?
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="form-control contact-footer-body--text-area"
              placeholder="Escribe tu mensaje aqui"
              id="floatingTextarea2"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="contact-footer-body--button-container">
        <button
          onClick={() => sendEmail()}
          className="contact-footer-body--button BebasNeue "
        >
          Enviar
        </button>
      </div>
    </section>
  );
}

export default ContactComponent;
