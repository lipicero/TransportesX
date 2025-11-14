const express = require('express');
const router = express.Router();
const UsuarioModel = require("../../models/usuariosModel");

router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout"
  });
});

router.post("/", async (req, res, next) =>{
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await UsuarioModel.getUserByUsernameAndPassword(
      usuario,
      password
    );
    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
        message: "Usuario o contraseña incorrectos"
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/login", {
      layout: "admin/layout",
      error: true,
      message: "Error al intentar iniciar sesión"
    });
  }
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

module.exports = router;
