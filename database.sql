CREATE DATABASE controle_financeiro

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    login VARCHAR(50),
    senha VARCHAR(100),
    situacao VARCHAR(20)
);

CREATE TABLE lancamento (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    data_lancamento DATE,
    valor DECIMAL(10,2),
    tipo_lancamento VARCHAR(20),
    situacao VARCHAR(20)
);

INSERT INTO usuario (nome, login, senha, situacao)
VALUES ('Henrique', 'admin', '123456', 'ATIVO');

INSERT INTO lancamento (descricao, data_lancamento, valor, tipo_lancamento, situacao) VALUES
('Salário', '2026-03-01', 3000.00, 'RECEITA', 'PAGO'),
('Aluguel', '2026-03-05', 1200.00, 'DESPESA', 'PAGO'),
('Supermercado', '2026-03-06', 350.00, 'DESPESA', 'PAGO'),
('Internet', '2026-03-07', 100.00, 'DESPESA', 'PENDENTE'),
('Freelance', '2026-03-10', 800.00, 'RECEITA', 'PAGO'),
('Energia', '2026-03-11', 200.00, 'DESPESA', 'PENDENTE'),
('Academia', '2026-03-12', 90.00, 'DESPESA', 'PAGO'),
('Venda produto', '2026-03-15', 500.00, 'RECEITA', 'PAGO'),
('Combustível', '2026-03-18', 250.00, 'DESPESA', 'PAGO'),
('Investimento', '2026-03-20', 1000.00, 'RECEITA', 'PENDENTE');