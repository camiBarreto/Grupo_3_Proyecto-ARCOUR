const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/usersController");

//@ GET /users/login
router.get("/login", controllerUser.login);

//@ GET /users/register
router.get("/register", controllerUser.register);
//@ POST /users
router.post("/", controllerUser.postUser);

//@ GET /users/admin
router.get("/admin", controllerUser.admin);

//@ GET /users/create
router.get("/create", controllerUser.getCreateAdmin);
//@ POST /users
router.post("/post", controllerUser.postAdmin);

module.exports = router;
