import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Asegúrate de que la ruta sea correcta

// Resto del código del componente Navbar


export const Navbar = () => {
  const { store,actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Star Wars Blog
        </Link>
        <Link className="navbar-brand" to="/characters">
          characters
        </Link>
        <Link className="navbar-brand" to="/planets">
          Planets
        </Link>
        <Link className="navbar-brand" to="/starships">
          Starships
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Likes <span className="badge bg-secondary">{store.likes.length}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                {store.likes.map((cardName, index) => (
                  <li key={index}>
                    <span className="dropdown-item-text">{cardName}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};