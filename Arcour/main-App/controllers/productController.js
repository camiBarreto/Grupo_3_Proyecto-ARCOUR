const path = require("path");
const r = require("lodash"); // Libreria para generar numeros aleatorios

const { Product } = require("../database/models");
const { Sequelize } = require("sequelize");
const { validationResult } = require("express-validator");

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
  getProductDetail: async (req, res) => {
    //Obtener los datos de búsqueda del formulario
    const queryData = req.query;

    try {
      const vuelosIda = await Product.findAll({
        raw: true,
        where: {
          departure_airport: queryData.departureAirport,
          arrival_airport: queryData.arrivalAirport,
          departure_date: Sequelize.literal(
            `DATE(departure_date) = '${queryData.departureDate}'`
          ),
        },
      });

      let vuelosVuelta = [];
      if (!queryData.flightTypeIda) {
        vuelosVuelta = await Product.findAll({
          raw: true,
          where: {
            departure_airport: queryData.arrivalAirport,
            arrival_airport: queryData.departureAirport,
            departure_date: Sequelize.literal(
              `DATE(departure_date) = '${queryData.returnDate}'`
            ),
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
      const flight = await Product.findByPk(id);
      res.render("ver-detalle", { flight });
    } catch (error) {
      console.error(error);
    }
  },

  apiProductList: async (req, res) => {
    try {
      const flights = await Product.findAll();
  
      // Inicializa variables para llevar el registro de los totales
      let totalFlightsToBogota = 0;
      let totalFlightsToBuenosAires = 0;
      let totalFlightsToMontevideo = 0;

      let totalFlightsAvianca = 0;
      let totalFlightsLatam = 0;
      let totalFlightsAeroArg = 0;
  
      // Calcula los totales
      flights.forEach(flight => {
        if (flight.arrival_airport === "Aeropuerto Internacional El Dorado") {
          totalFlightsToBogota++;
        } else if (flight.arrival_airport === "Aeropuerto Internacional Ministro Pistarini") {
          totalFlightsToBuenosAires++;
        } else if (flight.arrival_airport === "Aeropuerto Internacional de Carrasco") {
          totalFlightsToMontevideo++;
        }
  
        if (flight.airline === "avianca") {
          totalFlightsAvianca++;
        } else if (flight.airline === "latam Airlines") {
          totalFlightsLatam++;
        } else if (flight.airline === "aerolineas Argentinas") {
          totalFlightsAeroArg++;
        }
      });
  
      const response = {
        //Cantidad de vuelos por destino
        totalFlights: [
          bogotaFlights = {
            airport: "Aeropuerto Internacional El Dorado",
            total: totalFlightsToBogota
          },
          montevideoFlights = {
            airport: "Aeropuerto Internacional de Carrasco",
            total: totalFlightsToMontevideo
          },
          buenosAiresFlights = {
            airport: "Aeropuerto Internacional Ministro Pistarini",
            total: totalFlightsToBuenosAires
          },
        ],
        //Cantidad de vuelos por aerolínea
        totalAirlines: [
          aviancaFlights = {
            airline: "Avianca",
            total: totalFlightsAvianca
          },
          latamFlights = {
            airline: "Latam Airlines",
            total: totalFlightsLatam
          },
          aeroArgFlights = {
            airline: "Aerolíneas Argentinas",
            total: totalFlightsAeroArg
          },
        ],
        count: flights.length,
        flights_list: flights
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  apiProductDetail: async (req, res) => {
    const id = req.params.id;
    try {
      const flight = await Product.findByPk(id);
  
      res.status(200).json(flight);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getProductEdits: async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const flight = await Product.findByPk(id);
      res.render("productEdits", { flight });
    } catch (error) {
      console.error(error);
    }
  },
  updateProduct: async (req, res) => {
    const errors = validationResult(req);
    const id = req.params.id;
    console.log(id)

    if (!errors.isEmpty()) {
      console.log(errors)
      const flight = await Product.findByPk(id);
      return res.render("productEdits", {
        errors: errors.mapped(),
        oldData: req.body,
        flight,
      });
    }
    const updateProduct = {
      departure_airport: req.body.departureAirport,
      arrival_airport: req.body.arrivalAirport,
      airline: req.body.aerolinea,
      departure_time: req.body.departureTime,
      arrival_time: req.body.arrivalTime,
      departure_date: req.body.departureDate,
      ticket_price: req.body.ticketPrice,
    };
    try {
      await Product.update(updateProduct, {
        where: {
          flight_number: id,
        },
      });
      return res.redirect("/products/data");

    } catch (error) {
      console.error(error);
    }
  },

  getProductCart: (req, res) => {
    res.render("productCart");
  },

  getCreate: async (req, res) => {
    res.render("createProduct");
  },

  postProduct: async (req, res) => {
    const randomInt = r.random(1000, 9999);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("createProduct", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
    const newProduct = {
      flight_number: randomInt,
      departure_airport: req.body.departureAirport,
      arrival_airport: req.body.arrivalAirport,
      airline: req.body.aerolinea,
      departure_date: req.body.departureDate,
      departure_time: req.body.departureTime,
      arrival_time: req.body.arrivalTime,
      ticket_price: req.body.ticketPrice,
    };
    newProduct.flight_duration =
      controllerProduct.calculateDuration(newProduct);

    try {
      await Product.create(newProduct);

      res.redirect("/products/data");
    } catch (error) {
      console.error(error);
    }

    // Desde los POST no renderizamos vistas, solo redireccionamos
    //res.redirect('/products');
  },

  deleteProduct: async (req, res) => {
    const id = req.params.id;

    try {
      await Product.destroy({
        where: {
          flight_number: id,
        },
      });

      res.redirect("/products/data");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = controllerProduct;
