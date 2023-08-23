const path = require("path");
const adminModel = require("../models/adminsModels");
const userModel = require("../models/usersModels");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

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
  processLogin: (req, res) => {
    let user = userModel.findByEmail(req.body.correo);
    let admin = adminModel.findByEmail(req.body.correo);
    
    if (user) {
      let isOkThePassword = bcrypt.compareSync(req.body.password, user.password);
      if (isOkThePassword) {
        delete user.password;
        req.session.loggedUser = user;
          if (req.body.recordarme) {
            res.cookie("userEmail", req.body.correo, { maxAge: (1000 * 60) * 2 })
          }
        return res.redirect("/users/profile")
      }
      else {
        return res.render("login")
      }

      //login de user
    } else if (admin) {
      let isOkThePassword = bcrypt.compareSync(req.body.password, admin.password);
      if (isOkThePassword) {
        delete admin.password;
        req.session.loggedAdmin = admin;
          if (req.body.recordarme) {
            res.cookie("userEmail", req.body.correo, { maxAge: (1000 * 60) * 2 })
          }
        return res.redirect("/users/admin")
      }
      else {
        return res.send("hola")
      }

      //login de admin
    } else {
      return res.send("hola")

      //error email inexistente
    }
  },
  profile:(req,res)=>{
    return res.redirect("/");
  },
  logOut: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/")
  }
};

module.exports = controllerUser;