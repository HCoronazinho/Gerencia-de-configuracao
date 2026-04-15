const test = require("node:test");
const assert = require("node:assert");
const { filtrarPorSituacao } = require("../src/filtrosLancamento");

const dados = [
  { situacao: "PAGO" },
  { situacao: "PENDENTE" }
];

test("filtra pago", () => {
  const res = filtrarPorSituacao(dados, "PAGO");
  assert.equal(res.length, 1);
});

test("filtra pendente", () => {
  const res = filtrarPorSituacao(dados, "PENDENTE");
  assert.equal(res.length, 1);
});

test("todos", () => {
  const res = filtrarPorSituacao(dados, "TODOS");
  assert.equal(res.length, 2);
});