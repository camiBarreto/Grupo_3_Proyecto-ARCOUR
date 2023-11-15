const path = require("path");

const controllerMain = { //controlador para todas las vistas del home
  prueba: (req, res) => {
    res.render("ensayo");
  },
  home: (req, res) => {
    res.render("home");
  },

  contact: (req, res) => {
    res.render("contacto");
  },
  aboutUs: (req, res) => {
    res.render("nuestra-empresa");
  },

  allies: (req, res) => {
    res.render("empresas-amigas");
  },

  buenosAires: (req, res) => {
    res.render("buenosAires");
  },

  bogota: (req, res) => {
    res.render("bogota");
  },

  montevideo: (req, res) => {
    res.render("montevideo");
  },
}

module.exports = controllerMain;