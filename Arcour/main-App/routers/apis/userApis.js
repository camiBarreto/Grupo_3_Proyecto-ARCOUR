const express = require("express");
const router = express.Router();
const controllerUser = require("../../controllers/usersController");

router.get("/api/users", controllerUser.apiUserList);
router.get("/api/users/:id/detail", controllerUser.apiUserDetail);

module.exports = router;