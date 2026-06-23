const test = require("node:test");
const assert = require("node:assert");

const BASE_URL = "http://localhost:3000";

test("GET /lancamentos deve retornar 200", async () => {
  const res = await fetch(`${BASE_URL}/lancamentos`);
  assert.equal(res.status, 200);
});

test("GET /lancamentos retorna lista", async () => {
  const res = await fetch(`${BASE_URL}/lancamentos`);
  const data = await res.json();

  assert.ok(Array.isArray(data));
});