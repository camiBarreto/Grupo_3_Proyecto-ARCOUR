const express = require("express");
const router = express.Router();
const controllerProduct = require("../../controllers/productController");

router.get("/api/flights", controllerProduct.apiProductList);
router.get("/api/flights/:id/detail", controllerProduct.apiProductDetail);

module.exports = router;