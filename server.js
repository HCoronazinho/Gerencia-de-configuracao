const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 conexão com PostgreSQL
const pool = new Pool({
  user: "postgres", // coloque seu usuário do PostgreSQL
  host: "localhost",
  database: "controle_financeiro", // coloque o nome do seu banco
  password: "admin", // coloque sua senha
  port: 5432,
});

// 🔍 rota para listar lançamentos
app.get("/lancamentos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM lancamento");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});