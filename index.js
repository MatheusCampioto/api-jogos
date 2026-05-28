const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

let jogos = [
  {
    id: 1,
    nome: "Red Dead Redemption 2",
    tipo: "Aventura",
    nota: 10,
    review: "Obra prima absoluta. História emocionante e mundo incrível.",
  },
  {
    id: 2,
    nome: "God of War",
    tipo: "Ação",
    nota: 10,
    review: "Kratos e Atreus numa jornada épica pela mitologia nórdica.",
  },
  {
    id: 3,
    nome: "Hollow Knight",
    tipo: "Metroidvania",
    nota: 9,
    review: "Desafiador e lindo. Um dos melhores indies já feitos.",
  },
  {
    id: 4,
    nome: "Cyberpunk 2077",
    tipo: "RPG",
    nota: 9,
    review: "Night City é viva e cheia de detalhes. História memorável.",
  },
  {
    id: 5,
    nome: "Hades",
    tipo: "Roguelike",
    nota: 9,
    review: "Loop viciante e narrativa integrada ao gameplay. Genial.",
  },
];
let proximoId = 6;

// POST /login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "usuario@esoft.com" && password === "Abc123") {
    return res.status(200).json({ token: uuidv4() });
  }
  return res.status(401).json({ error: "Credenciais inválidas." });
});

// GET /jogos
app.get("/jogos", (req, res) => {
  return res.status(200).json(jogos);
});

// GET /jogos/:id
app.get("/jogos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const jogo = jogos.find((j) => j.id === id);
  if (!jogo) {
    return res.status(404).json({ error: "Jogo não encontrado." });
  }
  return res.status(200).json(jogo);
});

// POST /jogos
app.post("/jogos", (req, res) => {
  const { nome, tipo, nota, review } = req.body;
  if (nome === undefined || tipo === undefined || nota === undefined || review === undefined) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios: nome, tipo, nota, review.",
    });
  }
  const novoJogo = { id: proximoId++, nome, tipo, nota, review };
  jogos.push(novoJogo);
  return res.status(201).json(novoJogo);
});

// PUT /jogos/:id
app.put("/jogos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = jogos.findIndex((j) => j.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Jogo não encontrado." });
  }
  const { nome, tipo, nota, review } = req.body;
  if (nome === undefined || tipo === undefined || nota === undefined || review === undefined) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios: nome, tipo, nota, review.",
    });
  }
  jogos[index] = { id, nome, tipo, nota, review };
  return res.status(200).json(jogos[index]);
});

// DELETE /jogos/:id
app.delete("/jogos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = jogos.findIndex((j) => j.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Jogo não encontrado." });
  }
  jogos.splice(index, 1);
  return res.status(204).send();
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando na porta ${PORT}`);
});
