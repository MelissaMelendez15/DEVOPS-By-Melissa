# 🗃️ Proyecto 01 – Bash Backup Script

Este proyecto consiste en un script sencillo en Bash que simula un proceso de backup local.  
Comprime una carpeta específica (`mis_archivos`) y guarda una copia con la fecha del día en una carpeta llamada `backups`.

---

## 🛠️ ¿Qué hace?

- Comprueba si existe la carpeta de backups
- Comprime la carpeta origen en formato `.tar.gz`
- Le pone como nombre `backup-fecha.tar.gz`
- Muestra un mensaje de éxito al finalizar

---

## 📂 Estructura del proyecto
```
01-bash-backup-script/ ├── backup.sh # Script Bash que realiza el backup └── README.md # Explicación del proyecto

```
## 🧪 Cómo se usa

```bash
chmod +x backup.sh     # Dar permisos de ejecución
./backup.sh            # Ejecutar el script

🔁 Puedes automatizarlo con cron para que se ejecute cada X tiempo.

🧠 ¿Qué estoy aprendiendo?
Este proyecto es mi primer paso práctico en Bash, una herramienta clave en automatización de servidores.
Estoy aprendiendo a trabajar con variables, fechas, rutas, compresión y lógica básica de scripting.

Creado con 💛 por Meli.

