const express = require("express");
const multer = require("multer")
const router = express.Router();
const controllerProduct = require("../controllers/productController");
const adminMiddleware = require('../middlewares/adminMiddleware');


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
router.get("/product-cart", controllerProduct.getProductCart);
//@ GET /product-detail
router.get("/product-detail", controllerProduct.getProductDetail);
//@ GET /product-detail/ver-detalle
router.get("/:id/ver-detalle", controllerProduct.getVerDetalle);
//@ GET /products
router.get("/data",adminMiddleware, controllerProduct.getProductList);
//@ DELETE /products/delete
router.delete("/:id/delete", controllerProduct.destroyProduct);


//@ GET /products/:id/productEdits
router.get("/:id/productEdits", adminMiddleware,controllerProduct.getProductEdits);
//@ PUT /products/:id/productEdits
router.put("/:id/put", controllerProduct.updateProduct);


//@ GET /products/create
router.get("/create",adminMiddleware, controllerProduct.getCreate);
//@ POST /products
router.post("/post", controllerProduct.postProduct);

module.exports = router;
