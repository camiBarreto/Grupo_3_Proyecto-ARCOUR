const express = require("express");
const router = express.Router();
const controllerMain = require("../controllers/mainController");

//rutas para todas las vistas del home (incluida el home)
router.get("/", controllerMain.home);
router.get("/ensayo", controllerMain.prueba);
router.get("/contacto", controllerMain.contact);
router.get("/nuestra-empresa", controllerMain.aboutUs);
router.get("/empresas-amigas", controllerMain.allies);
router.get("/buenosAires", controllerMain.buenosAires);
router.get("/bogota", controllerMain.bogota);
router.get("/montevideo", controllerMain.montevideo);

module.exports = router;