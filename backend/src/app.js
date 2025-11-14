require('dotenv').config({ silent: true });
const express = require('express');
const session = require('express-session');
const path = require('path');
var fileUpload = require('express-fileupload');
var cors = require('cors');
const app = express();
var apiRouter = require('./routes/admin/api');

// Configuración del motor de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// Configuración de sesiones
app.use(session({
  secret: process.env.SESSION_SECRET || 'mi-secreto-super-seguro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // cambiar a true si usas HTTPS
    maxAge: 1000 * 60 * 60 * 24 // 24 horas
  }
}));

// Rutas
const login = require('./routes/admin/login');
const novedades = require('./routes/admin/novedades');

app.use('/api', cors(), apiRouter);
app.use('/admin/login', login);

// Middleware de autenticación
const secured = async function (req, res, next) {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
};

app.use('/admin/novedades', secured, novedades);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando correctamente' });
});


module.exports = app;