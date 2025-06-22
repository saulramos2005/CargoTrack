#!/bin/bash

echo "🧹 Limpiando proyecto Next.js..."

rm -rf .next
rm -rf node_modules
rm -rf node_modules/.cache
rm -rf package-lock.json

echo "📦 Reinstalando dependencias..."
npm install

echo "🛠️ Compilando el proyecto..."
npm run build

echo "✅ Proyecto limpiado y recompilado correctamente."
