const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));
// 🔗 conexão com PostgreSQL
const pool = new Pool({
  user: "henrique",
  host: "localhost",
  database: "controle_financeiro",
  password: "123456",
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

app.post("/lancamentos", async (req, res) => {
  const { descricao, data_lancamento, valor, tipo_lancamento, situacao } = req.body;

  try {
    await pool.query(
      `INSERT INTO lancamento 
       (descricao, data_lancamento, valor, tipo_lancamento, situacao) 
       VALUES ($1, $2, $3, $4, $5)`,
      [descricao, data_lancamento, valor, tipo_lancamento, situacao]
    );

    res.send("Lançamento criado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao inserir");
  }
});

app.post("/login", async (req, res) => {
  const { login, senha } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM usuario WHERE login = $1 AND senha = $2",
      [login, senha]
    );

    if (result.rows.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
});

const path = require("path");

app.use(express.static(path.join(__dirname)));