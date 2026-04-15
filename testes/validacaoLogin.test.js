const test = require("node:test");
const assert = require("node:assert");
const { validarLogin } = require("../src/validacaoLogin");

test("login correto", () => {
  assert.equal(validarLogin("admin", "123456"), true);
});

test("senha errada", () => {
  assert.equal(validarLogin("admin", "123"), false);
});

test("vazio", () => {
  assert.equal(validarLogin("", ""), false);
});