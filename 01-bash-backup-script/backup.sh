#!/bin/bash

# Ruta del directorio a respaldar
DIRECTORIO_ORIGEN="$HOME/mis_archivos"

# Ruta del backup (puedes cambiarla)
DESTINO_BACKUP="$HOME/backups"

# Fecha del día para el nombre del archivo
FECHA=$(date +%Y-%m-%d)

# Crear carpeta de backup si no existe
mkdir -p "$DESTINO_BACKUP"

# Crear archivo .tar.gz con fecha
tar -czf "$DESTINO_BACKUP/backup-$FECHA.tar.gz" "$DIRECTORIO_ORIGEN"

echo "✅ Backup realizado con éxito en $DESTINO_BACKUP/backup-$FECHA.tar.gz"
