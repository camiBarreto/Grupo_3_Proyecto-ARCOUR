const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/usersController");
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');


//@ GET /users/login
router.get("/login", guestMiddleware, controllerUser.login);
//@ POST /users/login/post
router.post("/login/post", controllerUser.processLogin);

//@ GET /users/register
router.get("/register",guestMiddleware, controllerUser.register);
//@ POST /users/post
router.post("/post", controllerUser.postUser);

//@ GET /users/admin
router.get("/admin",adminMiddleware, controllerUser.admin);

//@ GET /users/create
router.get("/create", controllerUser.getCreateAdmin);
//@ GET /users/logOut
router.get("/logOut", authMiddleware, controllerUser.logOut);

//@ POST /users
router.post("/post/admin", controllerUser.postAdmin);

module.exports = router;
