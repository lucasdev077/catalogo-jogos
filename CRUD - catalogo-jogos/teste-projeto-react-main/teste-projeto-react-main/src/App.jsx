import React, { useState, useEffect } from 'react'; // Hooks do React
import axios from 'axios'; // Cliente HTTP para fazer requisições à API
import debounce from 'lodash.debounce'; // Função para evitar chamadas excessivas da API ao digitar
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/theme.css';
import Header from './components/Header'; 
import GameList from './components/GameList'; 
import Footer from './components/Footer'; 
import './App.css'; 

function App() {
  // Estados principais do app
  const [games, setGames] = useState([]); // Lista de jogos salvos no catálogo do usuário
  const [loading, setLoading] = useState(false); // Indica se está carregando dados
  const [page, setPage] = useState(1); // Página atual da busca
  const [previewGames, setPreviewGames] = useState([]); // Resultados da busca de jogos (preview)
  const [searchQuery, setSearchQuery] = useState(''); // Termo digitado na busca

  // Função responsável por buscar jogos na API RAWG com base na busca e página atual
  const fetchGames = (searchQuery) => {
    if (!searchQuery.trim()) {
      setPreviewGames([]); // Limpa o preview se o campo estiver vazio
      return;
    }

    setLoading(true); // Ativa o carregamento
    axios
      .get(`https://api.rawg.io/api/games?key=935f87aa7bea4c27ba2ec9c54b03f2bc&page=${page}&page_size=5&search=${searchQuery}`)
      .then((response) => {
        const newGames = response.data.results;
        setPreviewGames(newGames); // Mostra os resultados para o usuário
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar jogos:', error);
        setLoading(false); // Desativa o carregamento mesmo em erro
      });
  };

  // Adiciona um jogo ao catálogo do usuário (sem duplicatas)
  const addGameToCatalog = (game) => {
    if (!games.some((g) => g.id === game.id)) {
      setGames((prevGames) => [
        ...prevGames,
        {
          ...game,
          rating: 0, // Avaliação inicial zerada
          customDescription: '', // Descrição personalizada do usuário
          isSavedToBackend: false, // Indica que ainda não foi salvo no backend
          backendId: null, // ID do banco (quando salvo)
        },
      ]);
      setPreviewGames([]); // Limpa os previews após adicionar
      setSearchQuery(''); // Limpa o campo de busca
    }
  };

  // Função para deletar jogo do catálogo e do backend
  const deleteGame = (gameId) => {
    const gameToDelete = games.find(game => game.id === gameId);
    if (gameToDelete && gameToDelete.backendId) {
      axios
        .delete(`http://localhost:8080/Game/deletar/${gameToDelete.backendId}`)
        .then(() => {
          setGames(games.filter((game) => game.id !== gameId)); // Remove da lista local
        })
        .catch((error) => {
          console.error('Erro ao deletar jogo:', error);
        });
    } else {
      console.error('Jogo não encontrado ou sem backendId'); // Validação extra
    }
  };

  // Salva ou atualiza um jogo no backend com avaliação e descrição
  const handleSave = (gameId, newDescription, newRating) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) return;

    const transformedRating = newRating;

    // Se o jogo ainda não foi salvo no backend
    if (!game.isSavedToBackend) {
      axios
        .post('http://localhost:8080/Game/criar', {
          rawgId: game.id,
          name: game.name,
          description: newDescription,
          rating: transformedRating,
          image: game.background_image || 'https://via.placeholder.com/300x200',
        })
        .then((response) => {
          setGames(games.map((g) =>
            g.id === gameId
              ? {
                  ...g,
                  isSavedToBackend: true,
                  customDescription: newDescription,
                  rating: transformedRating,
                  backendId: response.data.id, // Armazena ID do backend para futuras atualizações
                }
              : g
          ));
        })
        .catch((error) => {
          console.error('Erro ao criar o jogo:', error);
        });
    } else {
      // Atualiza jogo já existente no backend
      axios.put(`http://localhost:8080/Game/atualizar/${game.backendId}`, {
        rawgId: game.id,
        name: game.name,
        description: newDescription,
        rating: transformedRating,
        image: game.background_image || 'https://via.placeholder.com/300x200',
      })
      .then(() => {
        setGames(games.map((g) =>
          g.id === gameId
            ? { ...g, customDescription: newDescription, rating: transformedRating }
            : g
        ));
      })
      .catch((error) => {
        console.error('Erro ao atualizar o jogo:', error);
      });
    }
  };

  // Função de busca com debounce (espera 500ms após o usuário parar de digitar)
  const debouncedFetchGames = debounce((query) => fetchGames(query), 500);

  // Atualiza o termo de busca e chama a busca com debounce
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    debouncedFetchGames(query);
  };

  // Troca de página para busca paginada
  const goToNextPage = () => setPage((prevPage) => prevPage + 1);
  const goToPreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  // Sempre que o termo de busca ou a página mudarem, a busca é refeita
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchGames(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId); // Evita múltiplas chamadas
  }, [searchQuery, page]);

  // Renderização principal da aplicação
  return (
    <div>
      {/* Componente de cabeçalho com campo de busca */}
      <Header onSearch={handleSearchChange} />

      {/* Mostra os resultados da busca (preview) */}
      {searchQuery.trim() !== '' && previewGames.length > 0 && (
        <div className="preview-container w-100 px-3 px-sm-4 py-3">
          <div className="row">
            {previewGames.map((game) => (
              <div
                className="col-12 col-md-4 mb-4"
                key={game.id}
                onClick={() => addGameToCatalog(game)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card preview-card h-100">
                  <img
                    src={game.background_image || 'https://via.placeholder.com/300x200'}
                    className="card-img-top"
                    alt={game.name}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <p className="card-text" style={{ fontSize: '0.9rem' }}>
                      Clique para adicionar ao catálogo.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Paginação dos resultados da busca */}
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn custom-btn"
              onClick={goToPreviousPage}
              disabled={page === 1}
            >
              Anterior
            </button>
            <button
              className="btn custom-btn"
              onClick={goToNextPage}
            >
              Próximo
            </button>
          </div>
        </div>
      )}

      {/* Lista dos jogos adicionados ao catálogo */}
      <main>
        <div className="container mt-4">
          {loading ? (
            // Carregando os dados
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : (
            // Renderiza a lista de jogos do catálogo
            <div className="row">
              {games.map((game) => (
                <div className="col-md-4" key={game.id}>
                  <GameList
                    gameId={game.id}
                    image={game.background_image}
                    name={game.name}
                    description={game.description}
                    customDescription={game.customDescription}
                    rating={game.rating}
                    backendId={game.backendId}
                    onDelete={deleteGame}
                    onSave={handleSave}
                    onDescriptionChange={(gameId, newDescription) => {
                      const updatedGames = games.map((g) =>
                        g.id === gameId ? { ...g, customDescription: newDescription } : g
                      );
                      setGames(updatedGames);
                    }}
                    onRate={(gameId, newRating) => {
                      const updatedGames = games.map((g) =>
                        g.id === gameId ? { ...g, rating: newRating } : g
                      );
                      setGames(updatedGames);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Rodapé da aplicação */}
      <Footer />
    </div>
  );
}

export default App;
