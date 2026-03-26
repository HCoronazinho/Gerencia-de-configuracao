const lancamentos = [
  { id: 1, descricao: "Salário", data: "2026-03-01", valor: 3000, tipo: "RECEITA", situacao: "PAGO" },
  { id: 2, descricao: "Aluguel", data: "2026-03-05", valor: 1200, tipo: "DESPESA", situacao: "PAGO" },
  { id: 3, descricao: "Supermercado", data: "2026-03-06", valor: 350, tipo: "DESPESA", situacao: "PAGO" },
  { id: 4, descricao: "Internet", data: "2026-03-07", valor: 100, tipo: "DESPESA", situacao: "PENDENTE" },
  { id: 5, descricao: "Freelance", data: "2026-03-10", valor: 800, tipo: "RECEITA", situacao: "PAGO" },
  { id: 6, descricao: "Energia", data: "2026-03-11", valor: 200, tipo: "DESPESA", situacao: "PENDENTE" },
  { id: 7, descricao: "Academia", data: "2026-03-12", valor: 90, tipo: "DESPESA", situacao: "PAGO" },
  { id: 8, descricao: "Venda produto", data: "2026-03-13", valor: 500, tipo: "RECEITA", situacao: "PAGO" },
  { id: 9, descricao: "Combustível", data: "2026-03-14", valor: 250, tipo: "DESPESA", situacao: "PAGO" },
  { id: 10, descricao: "Investimento", data: "2026-03-15", valor: 1000, tipo: "RECEITA", situacao: "PENDENTE" },
];

const tabela = document.getElementById("tabela-lancamentos");

lancamentos.forEach(l => {
  const linha = `
    <tr>
      <td>${l.id}</td>
      <td>${l.descricao}</td>
      <td>${l.data}</td>
      <td>R$ ${l.valor}</td>
      <td>${l.tipo}</td>
      <td>${l.situacao}</td>
    </tr>
  `;
  tabela.innerHTML += linha;
});