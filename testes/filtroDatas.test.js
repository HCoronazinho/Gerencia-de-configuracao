const test = require("node:test");
const assert = require("node:assert");
const { filtrarPorData } = require("../src/filtrosLancamento");

const dados = [
  { data_lancamento: "2026-04-01" },
  { data_lancamento: "2026-04-10" }
];

test("filtra intervalo", () => {
  const res = filtrarPorData(dados, "2026-04-05", "2026-04-15");
  assert.equal(res.length, 1);
});

test("fora intervalo", () => {
  const res = filtrarPorData(dados, "2026-05-01", "2026-05-10");
  assert.equal(res.length, 0);
});

test("sem fim", () => {
  const res = filtrarPorData(dados, "2026-04-05");
  assert.equal(res.length, 1);
});