const path = require("path");
const productModel = require("../models/productModels");
const db = require ("../database/models")
const { Product } = require('../database/models');

const controllerProduct = {
  hola: async (req, res) => {
  try { 
    const productos = await db.Product.findAll()
    console.log(productos)
    res.render ("prueba", {productos})
  } catch (error) {
    console.error(error)
  }
  },
  getProductDetail: (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const queryData = req.query;

    //Guardar las listas de vuelos de ida y vuelta recibidos por el modelo.
    const { vuelosIda, vuelosVuelta } = productModel.findFlight(queryData);

    console.log({vuelosIda, vuelosVuelta});

    //Pasarle a la vista, product-detail los datos para mostrarlos dinamicamente.
    res.render("product-detail", { vuelosIda, vuelosVuelta, queryData });
  },

  getProductList: (req, res) => {
    const flights = productModel.findAll();

    res.render("productList", {flights});
  },
  getVerDetalle: (req, res) => {
     //Obtener los datos de búsqueda del formulario
     const flight = productModel.findByflightNumber(Number(req.params.id));

     //Guardar las listas de vuelos de ida y vuelta recibidos por el modelo.
 
    res.render("ver-detalle", {flight})
  },

  getProductEdits:(req,res)=>{
    const flight = productModel.findByflightNumber(Number(req.params.id));
    res.render("productEdits", { flight });
  },
  updateProduct: (req, res) => {
    let firstId = {
        flightNumber: Number(req.params.id)
    };

    updatedProduct = {
        ...firstId,
        ...req.body,
        flightDuration: productModel.calculateDuration(req.body)
    };

    /* 
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id); 
    */

    productModel.updateProduct(updatedProduct);

    res.redirect("/products/data");
},

  getProductCart: (req, res) => {
    res.render("productCart");
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

  deleteProduct: async (req, res) => {
    const id = req.params.id;

    try {
      await Product.destroy({
        where: {
          id: id,
        },
      });


    res.redirect("/products/data");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = controllerProduct;
