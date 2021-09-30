import {React,useEffect,useState} from "react";
import "./headerComponent.css";

function HeaderComponent() {
  const url = 'https://portfolio-back-heroku.herokuapp.com/api/logo/getLogo'
  const [logo, setLogo] = useState('');
  const getLogo = async () => {
    const response = await fetch(url);
    const logo = await response.json();
    setLogo(logo.logo);
  }
  useEffect(() => {
    getLogo();
  },[])
  function navigate() {}
  return (
    <header className="pos-f-t nav-container">
      <nav className="navbar navbar-dark ">
        <img className="img-item" src={logo} alt="Logo Duvan Villadiego" />
        <div className="inverter-none">
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">Home</h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Proyectos
            </h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Destacados
            </h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Contactame
            </h4>
          </a>
        </div>
        <button
          className="navbar-toggler no-border set-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="collapse-container ">
        <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">Home</h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Proyectos
            </h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Destacados
            </h4>
          </a>
          <a onClick={navigate()} href="/#">
            <h4 className="collapse-options text-white">
              Contactame
            </h4>
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
