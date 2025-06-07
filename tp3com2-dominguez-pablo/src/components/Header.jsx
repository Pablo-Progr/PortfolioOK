import { Link } from "react-router-dom";
import "../css/header.css";
import db from "../database/db.json";
import useThemeStore from "../store/zustand";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();


  document.body.className = theme; 

  return (
    <>
      <div className="info-header">
        <h1>{db.aboutme.nombre}</h1>
        <div>
          <h2>{db.aboutme.profesion}</h2>
          <h2>{db.aboutme.tecnologias.join(", ")}</h2>
        </div>

      </div>
      <div className="navbar-header">
            <div >
              <Link className="links" to="/">Sobre Mi</Link>
              <Link className="links" to="/projects">Proyectos</Link>
              <Link className="links" to="/contact">Contacto</Link>
        </div> 
        <div>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? "Oscuro" : "Claro"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
