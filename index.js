const express = require('express');
const app = express();

const filmes = [
  { id: 1, nome: "Matrix" },
  { id: 2, nome: "Interestelar" }
];

app.get('/api/filmes', (req, res) => {
  res.json(filmes);
});

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});