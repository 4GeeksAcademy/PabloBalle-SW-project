import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchBar } from "./SearchBar.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleRemoveFromLikes = (cardName) => {
    actions.removeCardFromLikes(cardName);
  };

  const handleDropdownItemClick = (event) => {
    event.stopPropagation(); // Evita que el evento se propague al elemento padre (dropdown)
  };
  const characters = [
    { id: 1, name: "Luke Skywalker" },
    { id: 2, name: "Darth Vader" },
    { id: 3, name: "Princess Leia" },
    
  ];
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
        <li className="nav-item">
          <SearchBar data={characters} />
        </li>
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
            {store.likes.length > 0 && ( // Verifica si store.likes tiene elementos antes de renderizar el dropdown
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
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                  onClick={handleDropdownItemClick}
                >
                  {store.likes.map((cardName, index) => (
                    <li key={index}>
                      <span className="dropdown-item-text">{cardName}</span>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromLikes(cardName)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};



