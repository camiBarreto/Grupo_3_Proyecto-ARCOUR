const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/usersController");

router.get("/login", controllerUser.login);
router.get("/register", controllerUser.register);

module.exports = router;