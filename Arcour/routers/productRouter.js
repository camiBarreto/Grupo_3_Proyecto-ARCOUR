const express = require("express");
const multer = require("multer")
const router = express.Router();
const controllerProduct = require("../controllers/productController");

// creamos un storage de multer
// seteamos el destination y el filename (dónde se guarda la imagen, y con qué nombre)
// inicializamos multer pasándole el storage que creamos
// pasamos este multer como segundo parámetro al router.post

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

//@ GET /product-cart
router.get("/product-cart", controllerProduct.productCart);
//@ GET /product-detail
router.get("/product-detail", controllerProduct.getProductDetail);
//@ GET /products
router.get("/data", controllerProduct.getProductList);
//@ GET /products/:id/detail
router.get("/:id/detail", controllerProduct.getDetail);

//@ GET /products/create
router.get("/create", controllerProduct.getCreate);
//@ POST /products
router.post("/post", controllerProduct.postProduct);

module.exports = router;
