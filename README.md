Aplicação CRUD em React com API RAWG.IO 🎮
Esta é uma aplicação CRUD (Criar, Ler, Atualizar, Deletar) construída com React, Vite e Bootstrap, utilizando a API RAWG.IO para gerenciar dados de jogos. 

Funcionalidades ✨
Listar Jogos: Busca e exibe uma lista de jogos da API RAWG.IO. 📜
Criar Jogo: Adiciona novos jogos (simulado, pois a API RAWG.IO é somente leitura para uso público). ➕
Atualizar Jogo: Edita detalhes de jogos (simulado localmente). ✏️
Deletar Jogo: Remove jogos do estado local. 🗑️
Interface Responsiva: Estilizada com Bootstrap para uma interface limpa e amigável em dispositivos móveis. 📱

Tecnologias Utilizadas 🛠️
React: Biblioteca para construção da interface de usuário.
Vite: Ferramenta de build rápida e servidor de desenvolvimento.
Bootstrap: Framework CSS para design responsivo. 
RAWG.IO API: API externa para obtenção de dados de jogos. 
Axios: Para realizar requisições HTTP à API. 

Pré-requisitos ✅
Node.js (versão 16 ou superior) 🟢
Uma chave de API do RAWG.IO (obtenha uma em RAWG.IO) 🔑

Instalação 🧑‍💻
Clone o repositório:
git clone  (https://github.com/lucasdev077/catalogo-jogos)
cd catalogo-jogos


Instale as dependências:
npm install


Inicie o servidor de desenvolvimento:
npm run dev


Abra o navegador e acesse (https://catalogo-games.netlify.app/)

Estrutura de Pastas: 
📁 public
📁 src
│   ├── 📁 assets
│   ├── 📁 components
│   │   ├── Footer.jsx
│   │   ├── GameList.jsx
│   │   └── Header.jsx
│   ├── 📁 styles
│   │   ├── Footer.css
│   │   ├── GameList.css
│   │   ├── Header.css
│   │   └── theme.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
📄 .eslint.config.js
📄 index.html
📄 package-lock.json
📄 package.json
📄 README.md
📄 vite.config.js


Uso 🎯
Pesquisa: Use a barra de pesquisa para filtrar jogos por nome (filtro no lado do cliente). 🔍
Adicionar Jogo: Basta ir até o jogo que pesquisou na barra de pesquisa.
Editar Jogo: Clique no botão "Editar" em um card de jogo para atualizar seus detalhes(avaliação e descrição). 
Deletar Jogo: Clique no botão "Deletar" para remover um jogo da lista. 
Pesquisa: Use a barra de pesquisa para filtrar jogos por nome (filtro no lado do cliente). 🔍

Integração com a API 🌐
A aplicação utiliza a API RAWG.IO para buscar dados de jogos. Endpoints principais:

GET /games/listar: Obtém uma lista de jogos. 📋


Nota: A API RAWG.IO é somente leitura para usuários públicos, então as operações de Criar/Atualizar/Deletar são simuladas no estado local da aplicação. 

Scripts 📜
npm run dev: Inicia o servidor de desenvolvimento. 
npm run build: Gera a build para produção. 

Dependências 📦
react: ^18.2.0 ⚛️
react-dom: ^18.2.0 ⚛️
react-router-dom: ^6.16.0 🛤️
axios: ^1.6.0 📡
bootstrap: ^5.3.2 🎨
@vitejs/plugin-react: ^4.0.4 ⚙️
vite: ^4.4.9 ⚡

Feito por lucas e matheus serafim.

![image](https://github.com/user-attachments/assets/bf9b58de-3f71-4a03-ae0e-b56653eb15b3)

