const test = require("node:test");
const assert = require("node:assert");

const BASE_URL = "http://localhost:3000";

test("GET /lancamentos deve retornar 200", async () => {
  const res = await fetch(`${BASE_URL}/lancamentos`);
  assert.equal(res.status, 200);
});

test("POST /lancamentos deve criar registro", async () => {
  const res = await fetch(`${BASE_URL}/lancamentos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      descricao: "Teste API",
      data_lancamento: "2026-04-01",
      valor: 100,
      tipo_lancamento: "RECEITA",
      situacao: "PAGO"
    })
  });

  assert.equal(res.status, 200);
});

test("GET /lancamentos retorna lista", async () => {
  const res = await fetch(`${BASE_URL}/lancamentos`);
  const data = await res.json();

  assert.ok(Array.isArray(data));
});