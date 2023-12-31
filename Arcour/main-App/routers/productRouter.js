const express = require("express");
const multer = require("multer");
const router = express.Router();
const controllerProduct = require("../controllers/productController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const validations = require("../middlewares/validationMiddleware");

// creamos un storage de multer
// seteamos el destination y el filename (dónde se guarda la imagen, y con qué nombre)
// inicializamos multer pasándole el storage que creamos
// pasamos este multer como segundo parámetro al router.post

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//@ GET /product-cart
router.get("/product-cart", controllerProduct.getProductCart);
//@ GET /product-detail
router.get("/product-detail", controllerProduct.getProductDetail);
//@ GET /products/:id/ver-detalle
router.get("/:id/ver-detalle", controllerProduct.getVerDetalle);
//@ GET /products/data
router.get("/data",adminMiddleware, controllerProduct.getProductList);

//@ GET /products/:id/productEdits
router.get("/:id/productEdits", adminMiddleware, controllerProduct.getProductEdits);
//@ post /products/:id/post
router.post("/:id/post" ,validations.editProductValidation, controllerProduct.updateProduct);
//@ DELETE /products/:id/delete
router.delete ("/:id/delete", controllerProduct.deleteProduct);


//@ GET /products/create
router.get("/create", adminMiddleware, controllerProduct.getCreate);
//@ POST /products
router.post("/post", validations.productValidation , controllerProduct.postProduct);

module.exports = router;
