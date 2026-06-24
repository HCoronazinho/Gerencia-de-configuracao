#!/bin/bash

set -e

echo "Atualizando sistema..."
sudo apt update

echo "Instalando Git..."
sudo apt install git -y

echo "Instalando Docker..."
sudo apt install docker.io -y

echo "Instalando Docker Compose..."
sudo apt install docker-compose-v2 -y

echo "Iniciando Docker..."
sudo systemctl start docker

echo "Criando .env..."

if [ ! -f .env ]; then
    cp .env.example .env
fi

echo "Subindo ambiente..."

sudo docker compose -f docker-compose.prod.yml up -d --build

echo "Aguardando banco iniciar..."
sleep 15

echo "Importando banco..."

sudo docker exec -i controle_financeiro_db_prod psql -U henrique -d controle_financeiro < database.sql || true

echo "Instalacao concluida."