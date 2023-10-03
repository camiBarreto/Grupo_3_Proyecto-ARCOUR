const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const validations = require("../middlewares/validationMiddleware");

//@ GET /users/login
router.get("/login", guestMiddleware, controllerUser.login);
//@ POST /users/login/post
router.post(
  "/login/post",
  validations.loginValidation,
  controllerUser.processLogin
);

//@ GET /users/register
router.get("/register", guestMiddleware, controllerUser.register);
//@ POST /users/post
router.post(
  "/post",
  validations.registerUserValidation,
  controllerUser.postUser
);

//@ GET /users/:id/editUser
router.get("/:id/editUser", controllerUser.getEditUser);
//@ PUT /users/:id/put/user
router.put(
  "/:id/put/user",
  validations.editUserValidation,
  controllerUser.putEditUser
);

//@ GET /users/create
router.get("/create", controllerUser.getCreateAdmin);
//@ POST /users/post/admin
router.post(
  "/post/admin",
  validations.registerAdminValidation,
  controllerUser.postAdmin
);

//@ GET /users/:id/editAdmin
router.get("/:id/editAdmin", controllerUser.getEditAdmin);
//@ PUT /users/put/admin
router.put(
  "/:id/put/admin",
  validations.editAdminValidation,
  controllerUser.putEditAdmin
);

//@ GET /users/admin
router.get("/admin", adminMiddleware, controllerUser.admin);

//@ GET /users/logOut
router.get("/logOut", authMiddleware, controllerUser.logOut);

//@ GET /users/profile
router.get("/profile", authMiddleware, controllerUser.profile);

module.exports = router;
