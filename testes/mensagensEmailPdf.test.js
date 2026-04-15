const test = require("node:test");
const assert = require("node:assert");
const { mensagemCadastro, mensagemEdicao, gerarTextoPDF } = require("../src/mensagensEmailPdf");

test("email cadastro", () => {
  const msg = mensagemCadastro({ descricao: "Teste", valor: 100 });
  assert.ok(msg.includes("Novo"));
});

test("email edicao", () => {
  const msg = mensagemEdicao({ descricao: "Teste", valor: 100 });
  assert.ok(msg.includes("editado"));
});

test("pdf", () => {
  const txt = gerarTextoPDF({ descricao: "Teste", data_lancamento: "2026-04-01", valor: 100 });
  assert.ok(txt.includes("Teste"));
});