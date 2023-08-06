const path = require("path");
const adminModel = require("../models/adminsModels");
const userModel = require("../models/usersModels");

const controllerUser = {
  login: (req, res) => {
    res.render("login");
  },
  postUser: (req, res) => {
    const newUser = {
      nombre: req.body.nombre, 
      apellido: req.body.apellidos, 
      genero: req.body.genero, 
      documento: req.body.documento, 
      fechaNacimiento: req.body.fechaNacimiento, 
      celular: req.body.celular, 
      correo: req.body.mail,
      password: req.body.contraseña, 
      pais: req.body.pais, 
      aerolineaFav: req.body.aerolinea, 
    };

    userModel.createUsers(newUser);

    res.redirect("/");
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
    const newCompany = {
      empresa: req.body.nombreEmpresa,
      correoEmpresarial: req.body.correo,
      password: req.body.password,
      paisDeOrigen: req.body.paisOrigen,
      aerolinea: req.body.aerolinea,
      paisRuta: req.body.paisRuta,
      observaciones: req.body.observaciones
    };

    adminModel.createAdmin(newCompany);

    res.redirect("/users/admin");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/');
  },
};

module.exports = controllerUser;