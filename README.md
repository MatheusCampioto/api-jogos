🎮 API de Jogos

Aplicação full stack desenvolvida na disciplina de Programação para Dispositivos Móveis.
O projeto consiste em uma API em Node.js/Express para cadastro de jogos e avaliações,
integrada a um front-end em React Native, com deploy realizado no Render.

------------------------------------------------------------
🚀 Funcionalidades

Back-end (API em Node.js/Express):
- Cadastro de jogos e avaliações (POST /jogos)
- Listagem de todos os jogos (GET /jogos)
- Consulta de jogo por ID (GET /jogos/:id)
- Atualização de jogo (PUT /jogos/:id)
- Exclusão de jogo (DELETE /jogos/:id)
- Autenticação simples (POST /login)

Front-end (React Native):
- Listagem de jogos consumindo a API
- Cadastro de novos jogos com nome e tipo
- Atualização da lista em tempo real
- Interface simples e responsiva

------------------------------------------------------------
🛠️ Tecnologias Utilizadas

- Back-end: Node.js, Express, UUID, CORS
- Front-end: React Native, Axios, Expo
- Deploy: Render

------------------------------------------------------------
📂 Estrutura do Projeto

api-jogos/
├── backend/ (API Node.js)
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/ (React Native)
│   ├── App.js
│   ├── package.json
│   └── ...

------------------------------------------------------------
⚙️ Como Executar

Back-end:
1. Instalar dependências: npm install
2. Rodar servidor: npm start
3. Servidor disponível em http://localhost:3000

Front-end:
1. Instalar dependências: npm install
2. Rodar aplicação: npm start
3. Executar via Expo no emulador ou dispositivo físico

------------------------------------------------------------
🌐 Deploy

A API está publicada no Render:
https://api-jogos-1-1b6n.onrender.com

------------------------------------------------------------
📌 Repositório

GitHub: https://github.com/MatheusCampioto/api-jogos

------------------------------------------------------------
📖 Observações

Este projeto foi desenvolvido como atividade acadêmica,
mas já possui estrutura completa de CRUD, integração front/back
e deploy em nuvem, servindo como base para evoluções futuras.
