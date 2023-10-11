const path = require("path");
const adminModel = require("../models/adminsModels");
const userModel = require("../models/usersModels");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { User, Admin } = require("../database/models");

const controllerUser = {
  login: (req, res) => {
    const errorMessage = req.query.error;

    res.render("login", { errorMessage });
  },

  postUser: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const newUser = {
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      gender: req.body.genero,
      document: req.body.documento,
      date_birth: req.body.fechaNacimiento,
      cell_phone: req.body.celular,
      email: req.body.mail,
      password: req.body.password,
      country: req.body.pais,
      favourite_aeroline: req.body.aerolinea,
    };

    try {
      await User.create(newUser);
      res.redirect("/users/login");
    } catch (error) {
      console.error(error);
    }
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
  postAdmin: async (req, res) => {
    const newCompany = {
      enterprise: req.body.nombreEmpresa,
      email_enterprise: req.body.correo,
      password: req.body.password,
      country_origin: req.body.paisOrigen,
      aeroline_name: req.body.aerolinea,
      country_route: req.body.paisRuta,
      contact: req.body.contacto,
    };

    try {
      await Admin.create(newCompany);
      res.redirect("/users/admin");
    } catch (error) {
      console.error(error);
    }

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
  putEditUser: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    const user = userModel.findById(req.params.id);
    if (!errors.isEmpty()) {
      return res.render("editUser", {
        errors: errors.mapped(),
        oldData: req.body,
        user,
      });
    }

    let firstId = {
      id: req.params.id,
    };

    if (req.body.hasOwnProperty("t&c")) {
      delete req.body["t&c"];
    }

    updatedUser = {
      ...firstId,
      ...req.body,
    };

    userModel.updateUser(updatedUser);

    return res.redirect("/users/profile");
  },
  getEditAdmin: (req, res) => {
    const admin = adminModel.findById(req.params.id);
    return res.render("editAdmin", { admin });
  },
  putEditAdmin: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    const admin = adminModel.findById(req.params.id);
    console.log(admin);
    if (!errors.isEmpty()) {
      return res.render("editAdmin", {
        errors: errors.mapped(),
        oldData: req.body,
        admin,
      });
    }

    let firstId = {
      id: req.params.id,
    };

    updatedAdmin = {
      ...firstId,
      ...req.body,
    };

    adminModel.updateAdmin(updatedAdmin);

    return res.redirect("/users/profile");
  },
};

module.exports = controllerUser;
