const path = require("path");
const userModel = require("../models/usersModels");

const controllerUser = {
  login: (req, res) => {
    res.render("login");
  },
  postUser: (req, res) => {

  },

  register: (req, res) => {
    res.render("register");
  },

  admin: (req, res) => {
    res.render("admin");
  },
  getCreateAdmin: (req, res) => {
    res.render("createAdmin");
  },
  postAdmin: (req, res) => {
    console.log(req.body);

    const newCompany = {
      empresa: req.body.nombreEmpresa,
      correoEmpresarial: req.body.correo,
      password: req.body.password,
      paisDeOrigen: req.body.paisOrigen,
      aerolinea: req.body.aerolinea,
      paisRuta: req.body.paisRuta,
      observaciones: req.body.observaciones
    };

    userModel.createUsers(newCompany);

    res.redirect("/");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerUser;