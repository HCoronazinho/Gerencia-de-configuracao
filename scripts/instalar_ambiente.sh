#!/bin/bash

set -e

echo "Atualizando sistema..."
sudo apt update

echo "Instalando Git..."
sudo apt install git -y

echo "Instalando Docker..."
sudo apt install docker.io -y

echo "Habilitando Docker..."
sudo systemctl enable docker
sudo systemctl start docker

echo "Instalando Docker Compose..."
sudo apt install docker-compose-v2 -y

echo "Criando .env caso nao exista..."

if [ ! -f .env ]; then
    cp .env.example .env
    echo ".env criado. Edite os dados antes de subir."
fi

echo "Subindo containers..."

sudo docker compose up -d --build

echo "Ambiente instalado com sucesso."