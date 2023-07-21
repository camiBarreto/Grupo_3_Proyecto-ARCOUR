const path = require("path");

const controllerMain= { //controlador para todas las vistas del home
    home: (req, res) => {
            res.sendFile(path.join(__dirname, "../views/main/home.html"));
          },
          
    contact: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/main/contacto.html"));
      },

    aboutUs: (req, res) => {
      res.sendFile(path.join(__dirname, "../views/main/nuestra-empresa.html"));
    },

    allies: (req, res) => {
      res.sendFile(path.join(__dirname, "../views/main/empresas-amigas.html"));
    },

    buenosAires: (req, res) => {
      res.sendFile(path.join(__dirname, "../views/main/buenosAires.html"));
    },

    bogota: (req, res) => {
      res.sendFile(path.join(__dirname, "../views/main/bogota.html"));
    },

    montevideo: (req, res) => {
      res.sendFile(path.join(__dirname, "../views/main/montevideo.html"));
    },
}

module.exports = controllerMain;