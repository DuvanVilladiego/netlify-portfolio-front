import { React, useState } from "react";
import "./contactComponent.css";

function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState({});
  const url = "http://localhost:3020/api/email/send";
  const sendEmail = async () => {
    if (name === "" || email === "" || message === "") {
      setFeedback({ error: "Porfavor rellene todos lo campos" });
      clearForm()
    } else {
      if (email.includes("@") === false) {
        setFeedback({ error: "Porfavor ingrese un email valido" });
        clearForm()
      } else {
        const reponse = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ email: email, subject: name, message }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await reponse.json();
        setFeedback(data);
        clearForm()
      }
    }
  };
  function clearForm() {
    const redirect = document.createElement("a");
    redirect.href = "#feedback";
    setTimeout(() => {
      redirect.click();
    }, 500);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setFeedback({});
    },3000)
  }
  return (
    <section id="feedback" className="contact-footer-body">
      <div>
        <h4
          id="contact"
          className="contact-body-title text-white BebasNeue fw-bold"
        >
          CONTACTAME
        </h4>
      </div>
      <div>
        {feedback.error ? (
          <div className="alert alert-warning feedback" role="alert">
            {feedback.error}
          </div>
        ) : feedback.success ? (
          <div className="alert alert-success feedback" role="alert">
            {feedback.success}
          </div>
        ) : null}
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
              value={name}
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
              value={email}
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
              value={message}
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
          href="#feedback"
          className="contact-footer-body--button BebasNeue "
        >
          Enviar
        </button>
      </div>
    </section>
  );
}

export default ContactComponent;
