const test = require("node:test");
const assert = require("node:assert");
const { getConfig } = require("../src/conexaoBanco");

test("config existe", () => {
  const cfg = getConfig();
  assert.ok(cfg.user);
});

test("tem database", () => {
  const cfg = getConfig();
  assert.ok(cfg.database);
});

test("nao vazio", () => {
  const cfg = getConfig();
  assert.notEqual(cfg, null);
});