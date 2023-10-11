const path = require("path");
const r = require("lodash"); // Libreria para generar numeros aleatorios
const productModel = require("../models/productModels");
const { Product } = require("../database/models");

const controllerProduct = {
  calculateDuration: (bodyData) => {
    // Parsear los tiempos de salida y llegada a objetos Date
    const departureTime = new Date(`1970-01-01T${bodyData.departure_time}:00Z`);
    const arrivalTime = new Date(`1970-01-01T${bodyData.arrival_time}:00Z`); // Usar el siguiente día para la hora de llegada

    // Si la hora de llegada es anterior a la hora de salida, sumar un día a la hora de llegada
    if (arrivalTime < departureTime) {
      arrivalTime.setDate(arrivalTime.getDate() + 1);
    }

    // Calcular la diferencia en milisegundos entre los tiempos
    const durationMilliseconds = arrivalTime - departureTime;

    // Convertir la diferencia de milisegundos a minutos
    const flightDurationMinutes = Math.floor(
      durationMilliseconds / (1000 * 60)
    );

    // Calcular las horas y minutos
    const hours = Math.floor(flightDurationMinutes / 60);
    const minutes = flightDurationMinutes % 60;

    // Construir la cadena de texto
    const flightDurationString = `${hours} h ${minutes} min`;

    return flightDurationString;
  },
  getProductDetail: (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const queryData = req.query;

    //Guardar las listas de vuelos de ida y vuelta recibidos por el modelo.
    const { vuelosIda, vuelosVuelta } = productModel.findFlight(queryData);

    console.log({ vuelosIda, vuelosVuelta });

    //Pasarle a la vista, product-detail los datos para mostrarlos dinamicamente.
    res.render("product-detail", { vuelosIda, vuelosVuelta, queryData });
  },

  getProductList: (req, res) => {
    const flights = productModel.findAll();

    res.render("productList", { flights });
  },
  getVerDetalle: (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const flight = productModel.findByflightNumber(Number(req.params.id));

    //Guardar las listas de vuelos de ida y vuelta recibidos por el modelo.

    res.render("ver-detalle", { flight });
  },

  getProductEdits: (req, res) => {
    const flight = productModel.findByflightNumber(Number(req.params.id));
    res.render("productEdits", { flight });
  },
  updateProduct: (req, res) => {
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

  getCreate: async (req, res) => {
    res.render("createProduct");
  },
  
  postProduct: async (req, res) => {
    const randomInt = r.random(1000, 9999);

    const newProduct = {
      flight_number: randomInt,
      departure_airport: req.body.departureAirport,
      arrival_airport: req.body.arrivalAirport,
      departure_date: req.body.departureDate,
      departure_time: req.body.departureTime,
      arrival_time: req.body.arrivalTime,
      ticket_price: req.body.ticketPrice,
    };
    newProduct.flight_duration = controllerProduct.calculateDuration(newProduct);
  
    try {
      await Product.create(newProduct);
  
      res.redirect("/products/data");
    } catch (error) {
      console.error(error);
    }

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },
};

module.exports = controllerProduct;
