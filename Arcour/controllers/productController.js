const path = require("path");
const productModel = require("../models/productModels");

const controllerProduct = {
  getProductDetail: (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const queryData = req.query;

    //Guardar las listas de vuelos de ida y vuelta recibidos por el modelo.
    const { vuelosIda, vuelosVuelta } = productModel.findFlight(queryData);

    console.log({vuelosIda, vuelosVuelta});

    //Pasarle a la vista, product-detail los datos para mostrarlos dinamicamente.
    res.render("product-detail", { vuelosIda, vuelosVuelta });
  },

  getProductList: (req, res) => {
    const flights = productModel.findAll();

    res.render("productList", {flights});
  },

  productCart: (req, res) => {
    res.render("productCart");
  },
  getDetail: (req, res) => {
    const productId = req.params.id;

    const selectedProduct = productModel.findById(productId);
    res.render("productDetail", { product: selectedProduct });
  },
  getCreate: (req, res) => {
    res.render("createProduct")
  },
  postProduct: (req, res) => {

    const newProduct = {
      departureAirport: req.body.departureAirport,
      arrivalAirport: req.body.arrivalAirport,
      departureDate: req.body.departureDate,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      ticketPrice: req.body.ticketPrice,
    };

    const createdProduct = productModel.createProduct(newProduct);

    res.redirect("/users/admin");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerProduct;
