# TransportesX

Aplicación web full-stack para gestión de transportes con panel de administración.

## 🏗️ Estructura del Proyecto

```
TransportesX/
├── backend/        # API Node.js + Express + Handlebars (Panel Admin)
├── frontend/       # Aplicación React (Sitio Público)
└── package.json    # Scripts concurrentes para ejecutar ambos
```

## 📋 Requisitos Previos

- **Node.js** v16 o superior
- **MySQL** v5.7 o superior
- **npm** o **yarn**

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/lipicero/TransportesX.git
cd TransportesX
```

### 2. Instalar dependencias

#### Opción A: Instalar todo desde la raíz (Recomendado)
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

#### Opción B: Instalar por partes
```bash
# Instalar dependencias raíz (concurrently)
npm install

# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

### 3. Configurar Base de Datos MySQL con XAMPP

#### Opción A: Importar desde phpMyAdmin (Recomendado)

1. **Iniciar XAMPP:**
   - Abre el panel de control de XAMPP
   - Inicia los módulos **Apache** y **MySQL**

2. **Acceder a phpMyAdmin:**
   - Abre tu navegador y ve a: `http://localhost/phpmyadmin`

3. **Crear la base de datos:**
   - Haz clic en "**Nueva**" en el panel izquierdo
   - Nombre de la base de datos: `transportesx`
   - Cotejamiento: `utf8mb4_general_ci`
   - Haz clic en "**Crear**"

4. **Importar el archivo SQL:**
   - Selecciona la base de datos `transportesx` recién creada
   - Haz clic en la pestaña "**Importar**"
   - Haz clic en "**Seleccionar archivo**" y busca: `transportesx.sql` (en la raíz del proyecto)
   - Haz clic en "**Continuar**" al final de la página
   - Espera a que se complete la importación ✅

#### Opción B: Importar desde línea de comandos

```bash
# Asegúrate de estar en la carpeta raíz del proyecto
mysql -u root -p transportesx < transportesx.sql
```

**Nota:** La base de datos incluye:
- Tabla `users` con usuario admin (email: `admin@transportesx.com`, password: `admin`)
- Tabla `novedades` con 3 noticias de ejemplo
- La contraseña está hasheada en MD5

### 4. Configurar Variables de Entorno

Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

```env
PORT=4000
MYSQL_HOST=localhost
MYSQL_DB_NAME=transportesx
MYSQL_USER=root
MYSQL_PASSWORD=

CLOUDINARY_URL=cloudinary://893155489887359:eD69r6JSEZxcnoTRqBVBSpOZ57c@devg9magh
SESSION_SECRET=mi_secreto

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=67d3bcd909cc0d
SMTP_PASS=569988417baf30
```

**Notas:**
- Ajusta `MYSQL_PASSWORD` según tu configuración local de MySQL
- Las credenciales de Cloudinary y SMTP son de prueba/demo
- Cambia `SESSION_SECRET` en producción

## ▶️ Ejecución

### Modo Desarrollo (Frontend + Backend simultáneamente)

Desde la raíz del proyecto:

```bash
npm start
```

Esto ejecutará:
- **Backend** en `http://localhost:4000` (Panel Admin)
- **Frontend** en `http://localhost:3000` (Sitio Público)

### Ejecutar por separado

#### Solo Backend
```bash
npm run backend
# o
cd backend && npm run dev
```

#### Solo Frontend
```bash
npm run frontend
# o
cd frontend && npm start
```

## 📱 Acceso a la Aplicación

- **Sitio Público (Frontend):** http://localhost:3000
- **Panel Admin (Backend):** http://localhost:4000/admin/login

### Credenciales de Admin
- Email: `admin@transportesx.com`
- Contraseña: `admin`

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js + Express
- MySQL (mysql2)
- Handlebars (motor de plantillas)
- Express-session (autenticación)
- Cloudinary (gestión de imágenes)
- Nodemailer (envío de emails)

### Frontend
- React
- React Router DOM
- Axios
- CSS Modules

## 📦 Scripts Disponibles

Desde la raíz:
- `npm start` - Ejecuta backend y frontend simultáneamente
- `npm run backend` - Solo backend en modo desarrollo
- `npm run frontend` - Solo frontend en modo desarrollo

Desde `backend/`:
- `npm run dev` - Ejecuta servidor con nodemon

Desde `frontend/`:
- `npm start` - Ejecuta React en modo desarrollo
- `npm run build` - Construye para producción

## 🔐 Seguridad

- El archivo `.env` está incluido en el repositorio solo con fines de demostración
