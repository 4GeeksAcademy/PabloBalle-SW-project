import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";

export const StarshipsDetails = () => {
  const { uid } = useParams();
  const [starshipDetails, setStarshipDetails] = useState(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
        if (response.ok) {
          const data = await response.json();
          setStarshipDetails(data.result.properties);
        } else {
          console.log("Error fetching starship details:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error fetching starship details:", error);
      }
    };

    fetchStarshipDetails();
  }, [uid]);

  if (!starshipDetails) {
    return <Spinner />;
  }

  const urlImage = `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;

  return (
    <div className="container">
      <img
        alt={starshipDetails.name}
        src={urlImage}
        onError={e => (e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg")}
      />
      <h1 className="text-primary">{starshipDetails.name}</h1>
      <p>Model: {starshipDetails.model}</p>
      <p>Manufacturer: {starshipDetails.manufacturer}</p>
      <p>Starship Class: {starshipDetails.starship_class}</p>
      {/* Agrega más detalles de la nave espacial según tus necesidades */}
    </div>
  );
};
