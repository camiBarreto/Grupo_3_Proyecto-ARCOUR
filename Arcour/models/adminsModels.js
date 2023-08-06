const fs = require("fs");
const path = require("path");

const modelo = {
  fileRoute: path.join(__dirname, "../data/admins.json"),

  findAll: () => {
    // Buscamos el contenido del archivo json
    const jsonData = fs.readFileSync(modelo.fileRoute, "utf-8"); // LINEA 7 PROBLEMA !!!!
    // Convertimos el json en JavaScript
    const admins = JSON.parse(jsonData);

    return admins;
  }, // encuentra los productos que estan en el archivo admins.json
  findById: (id) => {
    const admins = modelo.findAll(); // Para utilizar this.findAll debo declarar la funcion con la palabra function
    const selectedAdmin = admins.find(
      (adminActual) => adminActual.id == id
    );

    return selectedAdmin;
  }, // retorna productos segun su ID del archivo admins.json.

  createAdmin: (bodyData) => {
    let admins = modelo.findAll();

    const lastAdminsId = admins[admins.length - 1].id;

    const newAdmin = {
      id: lastAdminsId + 1,
      ...bodyData,
    };

    admins.push(newAdmin);

    const jsonData = JSON.stringify(admins); // Convertimos el Javascript en JSON

    fs.writeFileSync(modelo.fileRoute, jsonData, "utf-8");

    return newAdmin;
  },
  
};

module.exports = modelo;
