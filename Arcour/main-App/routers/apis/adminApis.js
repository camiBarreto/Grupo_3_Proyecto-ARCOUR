const express = require("express");
const router = express.Router();
const controllerUser = require("../../controllers/usersController");

router.get("/api/admins", controllerUser.apiAdminList);
router.get("/api/admins/:id/detail", controllerUser.apiAdminDetail);

module.exports = router;