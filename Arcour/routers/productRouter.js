const express = require("express");
const router = express.Router();
const controllerProduct = require("../controllers/productController");

//@ GET /product-cart
router.get("/product-cart", controllerProduct.productCart);
//@ GET /product-detail
router.get("/product-detail", controllerProduct.productDetail);
//@ GET /products
router.get("/", controllerProduct.getList);
//@ GET /products/:id/detail
router.get("/:id/detail", controllerProduct.getDetail);
//@ GET /products/create
router.get("/create", controllerProduct.getCreate);
//@ POST /products
router.post("/", controllerProduct.postProduct);

module.exports = router;
