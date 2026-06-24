#!/bin/bash

set -e

echo "Atualizando codigo..."

git pull origin main

echo "Reconstruindo containers..."

sudo docker compose -f docker-compose.prod.yml down

sudo docker compose -f docker-compose.prod.yml up -d --build

echo "Atualizacao concluida."