import React, { useState, useEffect } from "react";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom"; // Agrega esta línea

export const Starships = () => {
    const [starships, setStarships] = useState(JSON.parse(localStorage.getItem("starshipsLocal")));
    
    const urlImage = (uid) => `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;
  
    const handleOnErrorImg = (e) => {
      e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };
    
    return (
      <div className="container">
        <h1 className="text-primary">Starships</h1>
        <div className="row">
        {!starships ? (
          <Spinner />
        ) : (
          starships.results.map((starship) => (
            <div className="card" key={starship.uid} style={{ width: '18rem' }}>
              <img
                alt={starship.name}
                src={urlImage(starship.uid)} // Utilizar el uid de cada starship en la función urlImage
                onError={handleOnErrorImg}
              />
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <Link to={`/starships/${starship.uid}`} className="btn btn-primary">
                  More information
                </Link>
              </div>
              
            </div>
          ))
        )}
      </div>
      </div>
    );
  };
  