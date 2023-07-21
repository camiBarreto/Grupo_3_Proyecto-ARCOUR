const express = require("express");
const router = express.Router();
const controllerProduct = require("../controllers/productController");

router.get("/product-cart", controllerProduct.productCart);
router.get("/product-detail", controllerProduct.productDetail);

module.exports = router;