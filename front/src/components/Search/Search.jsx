import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes realizar la lógica de búsqueda dentro de la página.
    // Por ejemplo, buscar coincidencias en los textos de los elementos de la página.
    const elements = document.getElementsByTagName('*');
    const results = [];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (element.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ id: i, texto: element.innerText });
      }
    }

    // Actualizar el estado searchResults con los resultados obtenidos.
    setSearchResults(results);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSearchTerm(''); // Limpiar el término de búsqueda cuando se cierra el modal
  };

  return (
    <div>
      <FaSearch className="icon" size={24} onClick={handleModalOpen} />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <input
                type="text"
                ref={inputRef}
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Ingrese su búsqueda"
              />
              <button onClick={handleSearch}>Buscar</button>
              <button onClick={handleModalClose}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Aquí puedes mostrar los resultados de búsqueda */}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.texto}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador;
