const path = require("path");
const adminModel = require("../models/adminsModels");
const userModel = require("../models/usersModels");
const bcrypt = require("bcryptjs");

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
  processLogin:(req, res) => {
    const userData = req.body
    const user = userModel.findByEmail(userData.correo)
    const admin = adminModel.findByEmail(userData.correo)
    const errors = {
      email: {
        msg: "Credenciales invalidas",
      }
    }
    if(user){
      let isOkThePassword = bcrypt.compareSync(req.body.password, user.password);
      if(isOkThePassword){
        req.session.loggedUser = user;
        console.log(req.session.loggedUser)
        return res.redirect("/users/profile")
      }
      else {
        return res.send(errors)
      }

      //login de user
    } else if (admin) {
      let isOkThePassword = bcrypt.compareSync(req.body.password, admin.password);
      if(isOkThePassword){
        req.session.loggedAdmin = admin;
        console.log("te has logueado como admin" + req.session.loggedAdmin)
        return res.redirect("/users/admin")
      }
      else {
        return res.send(errors)
      }

      //login de admin
    } else {
      return res.send(errors)

      //error email inexistente
    }
  },
  logOut: (req,res) => {
    res.clearCookie("email");
    req.session.destroy();
    return res.redirect("/")
  }
};

module.exports = controllerUser;