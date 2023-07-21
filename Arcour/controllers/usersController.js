const path = require("path");

const controllerUser = {
    login:  (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/login.html"));
      },

    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/register.html"));
      }
}

module.exports = controllerUser;