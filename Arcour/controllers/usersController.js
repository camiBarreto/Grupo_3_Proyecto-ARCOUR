const path = require("path");
const adminModel = require("../models/adminsModels");
const userModel = require("../models/usersModels");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { User, Admin } = require('../database/models');

const controllerUser = {
  login: (req, res) => {
    const errorMessage = req.query.error;

    res.render("login", { errorMessage });
  },

  postUser: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const newUser = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      genero: req.body.genero,
      documento: req.body.documento,
      fechaNacimiento: req.body.fechaNacimiento,
      celular: req.body.celular,
      correo: req.body.mail,
      password: req.body.password,
      pais: req.body.pais,
      aerolineaFav: req.body.aerolinea,
    };

    userModel.createUsers(newUser);

    res.redirect("/users/login");
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
    const errors = validationResult(req);
    const admin = userModel.findById(req.params.id);
    if (!errors.isEmpty()) {
      return res.render("createAdmin", {
        errors: errors.mapped(),
        oldData: req.body,
        admin,
      });
    }

    const newCompany = {
      empresa: req.body.nombreEmpresa,
      correoEmpresarial: req.body.correo,
      password: req.body.password,
      paisDeOrigen: req.body.paisOrigen,
      aerolinea: req.body.aerolinea,
      paisRuta: req.body.paisRuta,
      contacto: req.body.contacto,
    };


    adminModel.createAdmin(newCompany);

    res.redirect("/users/admin");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/');
  },
  processLogin: (req, res) => {
    let user = userModel.findByEmail(req.body.correo);
    let admin = adminModel.findByEmail(req.body.correo);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    if (user) {
      let isOkThePassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (isOkThePassword) {
        delete user.password;
        req.session.loggedUser = user;
        if (req.body.recordarme) {
          res.cookie("userEmail", req.body.correo, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/users/profile");
      } else {
        return res.redirect("/users/login?error=Credenciales invalidas");
      }

      //login de user
    } else if (admin) {
      let isOkThePassword = bcrypt.compareSync(
        req.body.password,
        admin.password
      );
      if (isOkThePassword) {
        delete admin.password;
        req.session.loggedAdmin = admin;
        if (req.body.recordarme) {
          res.cookie("userEmail", req.body.correo, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/users/admin");
      } else {
        return res.redirect("/users/login?error=Credenciales invalidas");
      }
    } else {
      return res.redirect("/users/login?error=Credenciales invalidas");

      //error email inexistente
    }
  },
  profile: (req, res) => {
    return res.render("profile");
  },
  logOut: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
  getEditUser: (req, res) => {
    const user = userModel.findById(req.params.id);
    return res.render("editUser", { user });
  },
  putEditUser: async (req, res) => {
    const errors = validationResult(req);
    const user = userModel.findById(req.params.id);
    if (!errors.isEmpty()) {
      return res.render('editUser', {
        errors: errors.mapped(),
        oldData: req.body,
        user
      });
    }

    if (req.body.hasOwnProperty("t&c")) {
      delete req.body["t&c"];
    }
    
    const updateUser = {
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      gender: req.body.genero,
      document: req.body.documento,
      date_birth: req.body.fechaNacimiento,
      cell_phone: req.body.celular,
      email: req.body.correo,
      country: req.body.pais,
      favourite_aeroline: req.body.aerolineaFav
    };
    const id = req.params.id;
    try {
      await db.User.update( updateUser , {
        where: {
          id: id
        }
      })

      return res.redirect("/users/profile");
      
    } catch (error) {
      console.error(error);     
    }
  },
  getEditAdmin: (req, res) => {
    const admin = adminModel.findById(req.params.id);
    return res.render("editAdmin", { admin });
  },
  putEditAdmin: async (req, res) => {
    const errors = validationResult(req);
    const admin = adminModel.findById(req.params.id);
    if (!errors.isEmpty()) {
      return res.render('editAdmin', {
        errors: errors.mapped(),
        oldData: req.body,
        admin
      });
    }
    const updateAdmin = {
      enterprise: req.body.empresa,
      country_origin: req.body.paisDeOrigen,
      email_enterprise: req.body.correoEmpresarial,
      country_route: req.body.paisRuta,
      aeroline_name: req.body.aerolinea,
      contact: req.body.contacto,
    }
    const id = req.params.id;
    try {
      await db.Admin.update( updateAdmin , {
        where: {
          id: id
        }
      })

      return res.redirect("/users/profile")
      
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = controllerUser;
