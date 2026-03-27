
UNIVATES – GRADUAÇÃO
Curso: ENGENHARIA DE SOFTWARE
Unidade de Aprendizagem: GERÊNCIA DE CONFIGURAÇÃO
Professor: FABRÍCIO PRETTO
Nome do estudante: HENRIQUE CARON
Data: 26/06/2026

1. Da aplicação
A aplicação desenvolvida consiste em um sistema de controle financeiro para registro de receitas e
despesas. O sistema permite visualizar lançamentos cadastrados em banco de dados PostgreSQL
através de uma interface web simples. A arquitetura é composta por backend em Node.js, banco
PostgreSQL e frontend em HTML/JavaScript.
Número de classes: 0 (estrutura funcional com arquivo server.js).
Modelagem do banco de dados
Tabela usuario:
1 id (PK)
2 nome
3 login
4 senha
5 situacao
Tabela lancamento:
1 id (PK)
2 descricao
3 data_lancamento
4 valor
5 tipo_lancamento
6 situacao
Interface
A interface apresenta uma tabela com os lançamentos financeiros, consumindo dados da API
REST desenvolvida no backend.
2. Da publicação

Instalação das ferramentas
sudo apt update
sudo apt upgrade -y
sudo apt install nodejs npm -y
sudo apt install postgresql postgresql-contrib -y
sudo npm install -g pm2
Implantação
1 Clonagem do repositório GitHub
2 Instalação das dependências (npm install)
3 Criação do banco controle_financeiro
4 Criação das tabelas e inserção de dados
5 Configuração do backend (server.js)
6 Liberação da porta 3000 (ufw)
7 Execução com PM2 (pm2 start server.js)
8 Configuração de inicialização automática (pm2 startup + pm2 save)

3. Dos tempos gastos
1 Desenvolvimento da aplicação: 90 min
2 Configuração do banco: 10 min
3 Configuração da VM: 15 min
4 Publicação: 20 min
5 Testes e ajustes: 30 min

4. Acesso para testes
URL da aplicação:
http://177.44.248.103:3000/login.html
Credenciais de acesso:
Login: admin
Senha: 123456

5. Repositório
https://github.com/HCoronazinho/Gerencia-de-configuracao


