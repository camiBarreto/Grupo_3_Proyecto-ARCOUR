const fs = require("fs");
const path = require("path");

const modelo = {
  fileRoute: path.join(__dirname, "../data/products.json"),

  findAll: () => {
    // Buscamos el contenido del archivo json
    const jsonData = fs.readFileSync(modelo.fileRoute, "utf-8"); // LINEA 7 PROBLEMA !!!!
    // Convertimos el json en JavaScript
    const products = JSON.parse(jsonData);

    return products;
  }, // encuentra los productos que estan en el archivo products.json
  findById: (id) => {
    const products = modelo.findAll(); // Para utilizar this.findAll debo declarar la funcion con la palabra function
    const selectedProduct = products.find(
      (productoActual) => productoActual.id == id
    );

    return selectedProduct;
  }, // retorna productos segun su ID del archivo products.json.

  createProduct: (bodyData) => {
    let products = modelo.findAll();

    const lastProdId = products[products.length - 1].id;

    const newProduct = {
      id: lastProdId + 1,
      ...bodyData,
    };

    products.push(newProduct);

    const jsonData = JSON.stringify(products); // Convertimos el Javascript en JSON

    fs.writeFileSync(modelo.fileRoute, jsonData, "utf-8");

    return newProduct;
  },
};

module.exports = modelo;
