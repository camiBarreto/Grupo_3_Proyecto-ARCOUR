const path = require("path");
const productModel = require("../models/productModels");
const { Product } = require("../database/models");
const { Console } = require("console");
const { Sequelize } = require('sequelize');
const { validationResult } = require("express-validator");


const controllerProduct = {
  getProductDetail: async (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const queryData = req.query;

    try {
      const vuelosIda = await Product.findAll({
        raw: true,
        where: {
          departure_airport: queryData.departureAirport,
          arrival_airport: queryData.arrivalAirport,
          departure_date: Sequelize.literal(`DATE(departure_date) = '${queryData.departureDate}'`)
        },
      });

      let vuelosVuelta = []
      if(!queryData.flightTypeIda) {
        vuelosVuelta = await Product.findAll({
          raw: true,
          where: {
            departure_airport: queryData.arrivalAirport,
            arrival_airport: queryData.departureAirport,
            departure_date: Sequelize.literal(`DATE(departure_date) = '${queryData.returnDate}'`),
          },
        });
      }

      console.log({ vuelosIda, vuelosVuelta });
      //Pasarle a la vista, product-detail los datos para mostrarlos dinamicamente.
      res.render("product-detail", { vuelosIda, vuelosVuelta, queryData });
    } catch (error) {
      console.error("Error al obtener vuelos: ", error);
    }
  },

  getProductList: async (req, res) => {
    try {
      const flights = await Product.findAll();
      res.render("productList", { flights });
    } catch (error) {
      console.error(error);
    }
  },
  getVerDetalle: async (req, res) => {
    const id = req.params.id;
   try {
    const flight = await Product.findByPk(id)
    res.render("ver-detalle", { flight });
   } catch (error) {
    console.error(error);
   }

  },

  getProductEdits: async (req, res) => {
    const id = req.params.id;
    try {
     const flight = await Product.findByPk(id)
     res.render("productEdits", { flight });
    } catch (error) {
     console.error(error);
    }
  },
  updateProduct: (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const flight = productModel.findByflightNumber(Number(req.params.id));
      return res.render("productEdits", {
        errors: errors.mapped(),
        oldData: req.body,
        flight
      });
    }

    let firstId = {
      flightNumber: Number(req.params.id),
    };

    updatedProduct = {
      ...firstId,
      ...req.body,
      flightDuration: productModel.calculateDuration(req.body),
    };

    /* 
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id); 
    */

    productModel.updateProduct(updatedProduct);

    res.redirect("/products/data");
  },
  destroyProduct: (req, res) => {
    const flightId = Number(req.params.id);

    productModel.destroyProduct(flightId);

    res.redirect("/products/data");
  },

  getProductCart: (req, res) => {
    res.render("productCart");
  },

  getCreate: (req, res) => {
    res.render("createProduct");
  },
  postProduct: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("createProduct", {
        errors: errors.mapped(),
        oldData: req.body
      });
    }

    const newProduct = {
      departureAirport: req.body.departureAirport,
      arrivalAirport: req.body.arrivalAirport,
      departureDate: req.body.departureDate,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      ticketPrice: req.body.ticketPrice,
    };

    res.redirect("/users/admin");

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerProduct;
