import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";


export const CharactersDetails = () => {
  const { characterId } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const urlImage = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };
  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
        if (response.ok) {
          const data = await response.json();
          setCharacterDetails(data.result.properties); // Actualizamos el estado con las propiedades del personaje
        } else {
          console.log("Error fetching character details:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error fetching character details:", error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (!characterDetails) {
    return <Spinner />; // Agrega el componente Spinner o algún mensaje de carga mientras se obtienen los detalles
  }

  return (
    <div className="container">
            <img
          alt={characterDetails.name}
          src={urlImage(characterId)}
          onError={handleOnErrorImg} // Si la imagen no se puede cargar, muestra una imagen de reemplazo
        />
      <h1 className="text-primary">{characterDetails.name}</h1>
      <p>Height: {characterDetails.height}</p>
      <p>Mass: {characterDetails.mass}</p>
      <p>Hair Color: {characterDetails.hair_color}</p>
      <p>Skin Color: {characterDetails.skin_color}</p>
      <p>Eye Color: {characterDetails.eye_color}</p>
      <p>Birth Year: {characterDetails.birth_year}</p>
      <p>Gender: {characterDetails.gender}</p>
    </div>
  );
};