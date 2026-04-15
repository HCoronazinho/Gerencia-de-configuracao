function filtrarPorData(lista, inicio, fim) {
  return lista.filter(l => {
    const data = new Date(l.data_lancamento);
    if (inicio && data < new Date(inicio)) return false;
    if (fim && data > new Date(fim)) return false;
    return true;
  });
}

function filtrarPorSituacao(lista, situacao) {
  if (situacao === "TODOS") return lista;
  return lista.filter(l => l.situacao === situacao);
}

module.exports = { filtrarPorData, filtrarPorSituacao };