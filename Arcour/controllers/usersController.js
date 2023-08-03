const path = require("path");

const controllerUser = {
  login: (req, res) => {
    res.render("login");
  },

  register: (req, res) => {
    res.render("register");
  },

  admin: (req, res) => {
    res.render("admin");
  },
};

module.exports = controllerUser;
