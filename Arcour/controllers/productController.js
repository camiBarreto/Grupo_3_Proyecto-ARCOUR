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
      departureAirport:req.body.departureAirport ,
      arrivalAirport:req.body.arrivalAirport ,
      departureDate:req.body.departureAirport,
      arrivalDate:req.body.arrivalDate ,
      departureTime:req.body.departureTime ,
      arrivalTime:req.body.arrivalTime ,
      ticketPrice:req.body.ticketPrice,
    };

    const createdProduct = productModel.createProduct(newProduct);

    res.redirect("/users/admin");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerProduct;
