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
      country: req.body.pais,
      favourite_aeroline: req.body.aerolinea,
    };

    newUser.password = bcrypt.hashSync(req.body.password, 10);
    try {
      await User.create(newUser);
      res.redirect("/users/login");
    } catch (error) {
      console.error(error);
    }
  },

  apiUserList: async (req, res) => {
    try {
      const users = await User.findAll({ attributes: { exclude: ["password", "favourite_aeroline"] } });
      const response = {
        count: users.length,
        users_list: users
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  apiUserDetail: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id, { attributes: { exclude: ["password", "favourite_aeroline"] } });
      if (!user) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.status(200).json({ user });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("createAdmin", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
    const newCompany = {
      enterprise: req.body.nombreEmpresa,
      email_enterprise: req.body.correo,
      country_origin: req.body.paisOrigen,
      aeroline_name: req.body.aerolinea,
      country_route: req.body.paisRuta,
      contact: req.body.contacto,
      admin: true,
    };
    newCompany.password = bcrypt.hashSync(req.body.password, 10);

    try {
      await Admin.create(newCompany);
      res.redirect("/users/admin");
    } catch (error) {
      console.error(error);
    }

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/');
  },
  processLogin: async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    try {
      let user = await User.findOne({
        raw: true,
        where: {
          email: req.body.correo,
        },
      });


      let admin = await Admin.findOne({
        raw: true,
        where: {
          email_enterprise: req.body.correo,
        },
      });

      if (user) {
        let isOkThePassword = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (isOkThePassword) {
          delete user.password;
          req.session.loggedUser = user;
          if (req.body.recordarme) {
            res.cookie("userEmail", req.body.correo, {
              maxAge: 1000 * 60 * 60,
            });
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
            res.cookie("userEmail", req.body.correo, {
              maxAge: 1000 * 60 * 60,
            });
          }
          return res.redirect("/users/admin");
        } else {
          return res.redirect("/users/login?error=Credenciales invalidas");
        }
      } else {
        return res.redirect("/users/login?error=Credenciales invalidas");

        //error email inexistente
      }
    } catch (error) {
      console.error(error);
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
  getEditUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id)
      return res.render("editUser", { user });
    } catch (error) {
      console.error(error);
    }
  },
  putEditUser: async (req, res) => {
    const errors = validationResult(req);
    const id = req.params.id;
    try {
      const user = await User.findByPk(id)
      if (!errors.isEmpty()) {
        return res.render("editUser", {
          errors: errors.mapped(),
          oldData: req.body,
          user,
        });
      }
    } catch (error) {
      console.error(error);
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
      favourite_aeroline: req.body.aerolineaFav,
    };
    try {
      await User.update(updateUser, {
        where: {
          id: id,
        },
      });

      return res.redirect("/users/profile");
    } catch (error) {
      console.error(error);
    }
  },
  getEditAdmin: async (req, res) => {
    const id = req.params.id;
    try {
      const admin = await Admin.findByPk(id)
      return res.render("editAdmin", { admin });
    } catch (error) {
      console.error(error);
    }
  },
  putEditAdmin: async (req, res) => {
    const errors = validationResult(req);
    const admin = adminModel.findById(req.params.id);
    if (!errors.isEmpty()) {
      return res.render("editAdmin", {
        errors: errors.mapped(),
        oldData: req.body,
        admin,
      });
    }
    const updateAdmin = {
      enterprise: req.body.empresa,
      country_origin: req.body.paisDeOrigen,
      email_enterprise: req.body.correoEmpresarial,
      country_route: req.body.paisRuta,
      aeroline_name: req.body.aerolinea,
      contact: req.body.contacto,
    };
    const id = req.params.id;
    try {
      await db.Admin.update(updateAdmin, {
        where: {
          id: id,
        },
      });

      return res.redirect("/users/profile");
    } catch (error) {
      console.error(error);
    }
  },
  deleteOneAdmin: async (req, res) => {
    const id = req.params.id;

    try {
      await Admin.destroy({
        where: {
          id: id,
        },
      });

      res.clearCookie("userEmail");
      req.session.destroy();
      return res.redirect("/")

    } catch (error) {
      console.error(error);
    }
  },

  deleteOneUser: async (req, res) => {
    const id = req.params.id;

    try {
      await User.destroy({
        where: {
          id: id,
        },
      });

    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/")

    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = controllerUser;
