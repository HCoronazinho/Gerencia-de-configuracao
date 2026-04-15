function validarLancamento(l) {
  if (!l.descricao) return false;
  if (l.valor <= 0) return false;
  if (!l.tipo_lancamento) return false;
  return true;
}

module.exports = { validarLancamento };