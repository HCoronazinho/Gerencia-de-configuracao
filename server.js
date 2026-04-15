const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // apenas uma vez

//conexão com banco postgres
const pool = new Pool({
  user: "henrique",
  host: "localhost",
  database: "controle_financeiro",
  password: "123456",
  port: 5432,
});

// atualizar/update lançamentos
app.put("/lancamentos/:id", async (req, res) => {
  const { id } = req.params;
  const { descricao, data_lancamento, valor, tipo_lancamento, situacao } = req.body;

  try {
    await pool.query(
      `UPDATE lancamento 
       SET descricao=$1, data_lancamento=$2, valor=$3, tipo_lancamento=$4, situacao=$5
       WHERE id=$6`,
      [descricao, data_lancamento, valor, tipo_lancamento, situacao, id]
    );

    res.send("Atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar");
  }
});

// deletar lançamentos
app.delete("/lancamentos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM lancamento WHERE id=$1", [id]);
    res.send("Excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir");
  }
});

//  listar lançamentos
app.get("/lancamentos", async (req, res) => {
  const { dataInicio, dataFim, situacao } = req.query;

  let sql = "SELECT * FROM lancamento WHERE 1=1";
  const params = [];

  if (dataInicio) {
    params.push(dataInicio);
    sql += ` AND data_lancamento >= $${params.length}`;
  }

  if (dataFim) {
    params.push(dataFim);
    sql += ` AND data_lancamento <= $${params.length}`;
  }

  if (situacao && situacao !== "TODOS") {
    params.push(situacao);
    sql += ` AND situacao = $${params.length}`;
  }

  sql += " ORDER BY id DESC";

  try {
    const result = await pool.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
});

//  criar lançamento
app.post("/lancamentos", async (req, res) => {
  const { descricao, data_lancamento, valor, tipo_lancamento, situacao } = req.body;

  try {
    await pool.query(
      `INSERT INTO lancamento 
       (descricao, data_lancamento, valor, tipo_lancamento, situacao) 
       VALUES ($1, $2, $3, $4, $5)`,
      [descricao, data_lancamento, valor, tipo_lancamento, situacao]
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao inserir");
  }
});

//relatorios
app.get("/relatorio/pdf", async (req, res) => {
  const { dataInicio, dataFim, situacao } = req.query;

  let sql = "SELECT * FROM lancamento WHERE 1=1";
  const params = [];

  if (dataInicio) {
    params.push(dataInicio);
    sql += ` AND data_lancamento >= $${params.length}`;
  }

  if (dataFim) {
    params.push(dataFim);
    sql += ` AND data_lancamento <= $${params.length}`;
  }

  if (situacao && situacao !== "TODOS") {
    params.push(situacao);
    sql += ` AND situacao = $${params.length}`;
  }

  sql += " ORDER BY id DESC";

  try {
    const result = await pool.query(sql, params);

    const doc = new PDFDocument({ margin: 40 });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="relatorio-lancamentos.pdf"');

    doc.pipe(res);

    doc.fontSize(18).text("Relatório de Lançamentos", { align: "center" });
    doc.moveDown();

    doc.fontSize(10).text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`);
    doc.moveDown();

    result.rows.forEach((l) => {
      doc
        .fontSize(12)
        .text(
          `ID: ${l.id} | ${l.descricao} | ${l.data_lancamento} | R$ ${l.valor} | ${l.tipo_lancamento} | ${l.situacao}`
        );
      doc.moveDown(0.5);
    });

    doc.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao gerar PDF");
  }
});

// login
app.post("/login", async (req, res) => {
  const { login, senha } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM usuario WHERE login = $1 AND senha = $2",
      [login, senha]
    );

    res.json({ success: result.rows.length > 0 });

  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
});

// iniciar servidor
app.listen(3000, "0.0.0.0", () => {
  console.log("Tudo ok Caron, Servidor rodando na porta 3000");
});