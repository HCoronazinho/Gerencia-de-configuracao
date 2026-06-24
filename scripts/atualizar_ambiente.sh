#!/bin/bash

set -e

echo "Atualizando codigo..."

git pull origin main

echo "Reconstruindo containers..."

sudo docker compose down

sudo docker compose up -d --build

echo "Atualizacao concluida."