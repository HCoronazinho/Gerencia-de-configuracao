function mensagemCadastro(l) {
  return `Novo lançamento: ${l.descricao} - ${l.valor}`;
}

function mensagemEdicao(l) {
  return `Lançamento editado: ${l.descricao} - ${l.valor}`;
}

function gerarTextoPDF(l) {
  return `${l.descricao} | ${l.data_lancamento} | ${l.valor}`;
}

module.exports = { mensagemCadastro, mensagemEdicao, gerarTextoPDF };