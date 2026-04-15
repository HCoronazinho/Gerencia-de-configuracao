function carregar() {
  const dataInicio = document.getElementById("dataInicio").value;
  const dataFim = document.getElementById("dataFim").value;
  const situacao = document.getElementById("situacaoFiltro").value;

  const params = new URLSearchParams();

  if (dataInicio) params.append("dataInicio", dataInicio);
  if (dataFim) params.append("dataFim", dataFim);
  if (situacao && situacao !== "TODOS") params.append("situacao", situacao);

  console.log(params.toString()); // 👈 debug

  fetch(`/lancamentos?${params.toString()}`)
    .then(res => res.json())
    .then(data => {
      const tabela = document.getElementById("tabela");
      tabela.innerHTML = "";

      data.forEach(l => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${l.id}</td>
          <td>${l.descricao}</td>
          <td>${l.data_lancamento.split("T")[0]}</td>
          <td>${l.valor}</td>
          <td>${l.tipo_lancamento}</td>
          <td>${l.situacao}</td>
          <td>
            <button onclick="prepararEdicao(${l.id}, '${l.descricao}', '${l.data_lancamento}', ${l.valor}, '${l.tipo_lancamento}', '${l.situacao}')">
              Editar
            </button>
            <button onclick="excluir(${l.id})">Excluir</button>
          </td>
        `;

        tabela.appendChild(row);
      });
    });
}

function filtrar() {
  console.log("clicou filtrar"); // 👈 teste
  carregar();
}

function gerarPDF() {
  const dataInicio = document.getElementById("dataInicio").value;
  const dataFim = document.getElementById("dataFim").value;
  const situacao = document.getElementById("situacaoFiltro").value;

  const params = new URLSearchParams();

  if (dataInicio) params.append("dataInicio", dataInicio);
  if (dataFim) params.append("dataFim", dataFim);
  if (situacao && situacao !== "TODOS") params.append("situacao", situacao);

  window.open(`/relatorio/pdf?${params.toString()}`, "_blank");
}

// carregar ao abrir a página
carregar();