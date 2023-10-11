const fs = require("fs");
const path = require("path");


const modelo = {
  fileRoute: path.join(__dirname, "../data/products.json"),

  calculateDuration: (bodyData) => {
    // Parsear los tiempos de salida y llegada a objetos Date
    const departureTime = new Date(`1970-01-01T${bodyData.departureTime}:00Z`);
    const arrivalTime = new Date(`1970-01-01T${bodyData.arrivalTime}:00Z`); // Usar el siguiente día para la hora de llegada

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

  findAll: () => {
    // Buscamos el contenido del archivo json
    const jsonData = fs.readFileSync(modelo.fileRoute, "utf-8"); // LINEA 7 PROBLEMA !!!!
    // Convertimos el json en JavaScript
    const products = JSON.parse(jsonData);

    return products;
  }, // encuentra los productos que estan en el archivo products.json

  findFlight: (queryData) => {
    const products = modelo.findAll(); // Para utilizar this.findAll debo declarar la funcion con la palabra function

    //Filtra los vuelos que coincidan con los datos ingresados en el buscador del home del cliente. Vuelos de Ida.
    const vuelosIda = products.filter(
      (product) =>
        product.departureAirport == queryData.departureAirport &&
        product.arrivalAirport == queryData.arrivalAirport &&
        product.departureDate == queryData.departureDate
    );

    //Invierte los valores ingresados por el cliente en el home para devolver los vuelos que coincidan con los vuelos de Vuelta.
    const vuelosVuelta = products.filter(
      (product) =>
        product.departureAirport == queryData.arrivalAirport &&
        product.arrivalAirport == queryData.departureAirport &&
        product.departureDate == queryData.returnDate
    );

    return { vuelosIda, vuelosVuelta }; //Retorna un objeto literal con dos listas (vuelos de ida y de vuelta).
  },

  createProduct: (bodyData) => {
    let products = modelo.findAll();

    const randomInt = r.random(1000, 9999); // Genera un número aleatorio entre 1000 - 9999 para el número de vuelo

    const newProduct = {
      flightNumber: randomInt,
      ...bodyData,
      flightDuration: modelo.calculateDuration(bodyData),
    };

    products.push(newProduct);

    const jsonData = JSON.stringify(products); // Convertimos el Javascript en JSON

    fs.writeFileSync(modelo.fileRoute, jsonData, "utf-8");

    return newProduct;
  },

  findByflightNumber: (flightNumber) => {
    const products = modelo.findAll();

    const selectedProduct = products.find(
      (productoActual) => productoActual.flightNumber == flightNumber
    );

    return selectedProduct;
  },

  updateProduct: (updatedProduct) => {
    // Buscar array de productos ya existentes
    let products = modelo.findAll();
    // Conseguir en qué indice de ese array, está guardado el producto del id en cuestión
    const prodIndex = products.findIndex(
      productoActual => productoActual.flightNumber === updatedProduct.flightNumber
    );
    // Modificar el elemento del array en ese índice, por el que nos pasaron por parámetro
    products[prodIndex] = updatedProduct;
    // Convertir este nuevo array en JSON
    const productsJson = JSON.stringify(products);
    // Guardar todo al JSON
    fs.writeFileSync(modelo.fileRoute, productsJson, "utf-8");
  },

  destroyProduct: (id) => {
    let products = modelo.findAll();

    products = products.filter((product) => product.flightNumber !== id);

    // Convertir este nuevo array en JSON
    const productsJson = JSON.stringify(products);
    // Guardar todo al JSON
    fs.writeFileSync(modelo.fileRoute, productsJson, "utf-8");
  },
};

module.exports = modelo;
