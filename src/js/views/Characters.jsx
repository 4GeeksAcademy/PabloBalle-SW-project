import React, { useState, useEffect } from "react";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";
import { LikesBtn } from "../component/LikesBtn.jsx"; // Agrega esta línea

export const Characters = () => {
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("charactersLocal")));
  
  const urlImage = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  return (
    <div className="container">
      <h1 className="text-primary">Characters</h1>
      <div className="row">
      {!characters ? (
          <Spinner />
        ) : (
          characters.results.map((character) => (
            <div className="card" key={character.uid} style={{ width: "18rem" }}>
              <img alt={character.name} src={urlImage(character.uid)} onError={handleOnErrorImg} />
              <div className="card-body">
                <p className="card-text">{character.name}</p>
                <Link to={`/characters/${character.uid}`} className="btn btn-primary">
                  More information
                </Link>
                <LikesBtn cardName={character.name} />
              </div>
            </div>
          ))
        )}
    
    </div>
  </div>
  );
};
