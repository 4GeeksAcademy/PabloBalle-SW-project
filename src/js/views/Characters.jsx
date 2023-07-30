import React, { useState, useEffect } from "react";
import { Spinner } from "../component/Spinner.jsx";

export const Characters = () => {
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("charactersLocal")));
  // ^^^^^^^^ Updated the state variable name from "setcharacters" to "setCharacters"

  return (
    <div className="container">
      <h1 className="text-primary">Characters</h1>
      {!characters ? (
        <Spinner />
      ) : (
        <ul>
          {/* Use map to iterate over each character and render an <li> for each */}
          {characters.results.map((character) => (
            <li key={character.uid}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
