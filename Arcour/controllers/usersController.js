const path = require("path");

const controllerUser = {
    login:  (req, res) => {
        res.render("login");
      },

    register: (req, res) => {
        res.render("register");
      }
}

module.exports = controllerUser;