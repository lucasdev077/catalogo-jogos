import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Função que chama a pesquisa automaticamente enquanto o usuário digita
  const handleSearch = (e) => {
    onSearch(searchQuery); // Chama a função onSearch diretamente
  };

  return (
    <header className="header">
      <h1 className="header-title">Catálogo de Jogos</h1>

      {/* Barra de pesquisa */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value); // Atualiza o valor do campo
            onSearch(e.target.value); // Chama a função de busca enquanto o usuário digita
          }}
          placeholder="Pesquise por um jogo..."
        />
      </div>
    </header>
  );
};

export default Header;
