import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";

export const PlanetsDetails = () => {
  const { uid } = useParams();
  const [planetDetails, setPlanetDetails] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
        if (response.ok) {
          const data = await response.json();
          setPlanetDetails(data.result.properties);
        } else {
          console.log("Error fetching planet details:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error fetching planet details:", error);
      }
    };

    fetchPlanetDetails();
  }, [uid]);

  if (!planetDetails) {
    return <Spinner />;
  }

  const urlImage = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

  return (
    <div className="container">
      <img
        alt={planetDetails.name}
        src={urlImage}
        onError={e => (e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg")}
      />
      <h1 className="text-primary">{planetDetails.name}</h1>
      <p>Climate: {planetDetails.climate}</p>
      <p>Diameter: {planetDetails.diameter}</p>
      <p>Population: {planetDetails.population}</p>
      {/* Agrega más detalles del planeta según tus necesidades */}
    </div>
  );
};
