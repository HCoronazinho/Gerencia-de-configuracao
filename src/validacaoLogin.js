function validarLogin(login, senha) {
  if (!login || !senha) return false;
  if (login === "admin" && senha === "123456") return true;
  return false;
}

module.exports = { validarLogin };