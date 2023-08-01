import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectItem = (item) => {
    setSearchTerm("");
    // Aquí puedes definir la lógica para navegar a la página de detalles
    // Por ejemplo, si tienes una ruta /details/:id, puedes redirigir de esta manera:
    window.location.href = `/details/${item.id}`;
  };

  // Implementa la lógica para buscar coincidencias con el término de búsqueda y mostrar los resultados en el autocompletado

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Implementa aquí la lógica para mostrar el autocompletado */}
    </div>
  );
};


