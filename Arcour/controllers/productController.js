const path = require("path");
const productModel = require("../models/productModels");

const controllerProduct = {
  productDetail: (req, res) => {
    res.render("product-detail");
  },

  productCart: (req, res) => {
    res.render("productCart");
  },
  getList: (req, res) => {
    const products = productModel.findAll();
    res.render("productList", { products: products }); // O {products} si comparten el nombre
  },
  getDetail: (req, res) => {
    const productId = req.params.id;

    const selectedProduct = productModel.findById(productId);
    res.render("productDetail", { product: selectedProduct });
  },
  getCreate: (req,res) => {
    res.render("createProduct")
  },
  postProduct: (req, res) => {
    console.log(req.body);

    const newProduct = {
      departure_airport:req.body.a ,
      arrival_airport:req.body.a ,
      departure_date:req.body.a ,
      arrival_date:req.body.a ,
      departure_time:req.body.a ,
      arrival_time:req.body.a ,
      ticket_price:req.body.a 
    };

    const createdProduct = productModel.createProduct(newProduct);

    res.redirect("/products/" + createdProduct.id + "/detail");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerProduct;
