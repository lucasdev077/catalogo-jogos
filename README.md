Aplicação CRUD em React com API RAWG.IO 🎮
Esta é uma aplicação CRUD (Criar, Ler, Atualizar, Deletar) construída com React, Vite e Bootstrap, utilizando a API RAWG.IO para gerenciar dados de jogos. 🚀
Funcionalidades ✨

Listar Jogos: Busca e exibe uma lista de jogos da API RAWG.IO. 📜
Criar Jogo: Adiciona novos jogos (simulado, pois a API RAWG.IO é somente leitura para uso público). ➕
Atualizar Jogo: Edita detalhes de jogos (simulado localmente). ✏️
Deletar Jogo: Remove jogos do estado local. 🗑️
Interface Responsiva: Estilizada com Bootstrap para uma interface limpa e amigável em dispositivos móveis. 📱

Tecnologias Utilizadas 🛠️

React: Biblioteca para construção da interface de usuário. ⚛️
Vite: Ferramenta de build rápida e servidor de desenvolvimento. ⚡
Bootstrap: Framework CSS para design responsivo. 🎨
RAWG.IO API: API externa para obtenção de dados de jogos. 🌐
Axios: Para realizar requisições HTTP à API. 📡

Pré-requisitos ✅

Node.js (versão 16 ou superior) 🟢
Uma chave de API do RAWG.IO (obtenha uma em RAWG.IO) 🔑

Instalação 🧑‍💻

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


Instale as dependências:
npm install


Crie um arquivo .env na raiz do projeto e adicione sua chave de API do RAWG.IO:
VITE_RAWG_API_KEY=sua_chave_api_rawg


Inicie o servidor de desenvolvimento:
npm run dev


Abra o navegador e acesse http://localhost:5173 (ou a porta exibida no terminal). 🌍


Estrutura do Projeto 📂
├── public/                # Arquivos estáticos 📁
├── src/
│   ├── components/        # Componentes React reutilizáveis 🧩
│   ├── pages/             # Componentes de páginas (ex.: Home, GameForm) 📄
│   ├── App.jsx            # Componente principal da aplicação ⚙️
│   ├── main.jsx           # Ponto de entrada 🚪
│   └── styles/            # Arquivos CSS 🎨
├── .env                   # Variáveis de ambiente 🔐
├── index.html             # Ponto de entrada HTML 🌐
├── package.json           # Dependências e scripts do projeto 📦
└── README.md              # Este arquivo 📖

Uso 🎯

Página Inicial: Exibe uma lista de jogos obtida da API RAWG.IO. 🏠
Adicionar Jogo: Navegue até a página "Adicionar Jogo" para criar uma nova entrada de jogo (armazenada localmente). ➕
Editar Jogo: Clique no botão "Editar" em um card de jogo para atualizar seus detalhes. ✏️
Deletar Jogo: Clique no botão "Deletar" para remover um jogo da lista. 🗑️
Pesquisa: Use a barra de pesquisa para filtrar jogos por nome (filtro no lado do cliente). 🔍

Integração com a API 🌐
A aplicação utiliza a API RAWG.IO para buscar dados de jogos. Endpoints principais:

GET /games: Obtém uma lista de jogos. 📋
GET /games/{id}: Busca detalhes de um jogo específico. 🔎

Nota: A API RAWG.IO é somente leitura para usuários públicos, então as operações de Criar/Atualizar/Deletar são simuladas no estado local da aplicação. ⚠️
Scripts 📜

npm run dev: Inicia o servidor de desenvolvimento. 🚀
npm run build: Gera a build para produção. 🏗️
npm run preview: Visualiza a build de produção localmente. 👀

Dependências 📦

react: ^18.2.0 ⚛️
react-dom: ^18.2.0 ⚛️
react-router-dom: ^6.16.0 🛤️
axios: ^1.6.0 📡
bootstrap: ^5.3.2 🎨
@vitejs/plugin-react: ^4.0.4 ⚙️
vite: ^4.4.9 ⚡


