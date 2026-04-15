const test = require("node:test");
const assert = require("node:assert");
const { validarLancamento } = require("../src/validacaoLancamento");

test("valido", () => {
  assert.equal(validarLancamento({ descricao: "Teste", valor: 10, tipo_lancamento: "RECEITA" }), true);
});

test("descricao vazia", () => {
  assert.equal(validarLancamento({ descricao: "", valor: 10 }), false);
});

test("valor negativo", () => {
  assert.equal(validarLancamento({ descricao: "Teste", valor: -5 }), false);
});