import React, { useState, useEffect } from "react";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom"; // Agrega esta línea
import { LikesBtn } from "../component/LikesBtn.jsx";

export const Planets = () => {
  const [planets, setPlanets] = useState(JSON.parse(localStorage.getItem("planetsLocal")));
  const urlImage = (id) => `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };
  return (
    <div className="container">
      <h1 className="text-primary">Planets</h1>
      <div className="row">
      {!planets ? (
        <Spinner />
      ) : (
        planets.results.map((planet) => (
          <div className="card" key={planet.uid} style={{ width: '18rem' }}>
            <img
              alt={planet.name}
              src={urlImage(planet.uid)}
              onError={handleOnErrorImg}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <Link to={`/planets/${planet.uid}`} className="btn btn-primary">
                More information
              </Link>
              <LikesBtn cardName={planet.name} />
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
};


