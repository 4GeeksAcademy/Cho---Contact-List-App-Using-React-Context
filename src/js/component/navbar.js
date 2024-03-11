import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <button className="btn btn-primary">Inicio</button>
        </Link>
      </div>

      <div>
        <Link to="/addContact">
          <button className="btn btn-primary">Añadir Contacto</button>
        </Link>
      </div>
    </nav>
  );
};
