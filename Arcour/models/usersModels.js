const fs = require("fs");
const path = require("path");

const modelo = {
  fileRoute: path.join(__dirname, "../data/admin.json"),

  findAll: () => {
    // Buscamos el contenido del archivo json
    const jsonData = fs.readFileSync(modelo.fileRoute, "utf-8"); // LINEA 7 PROBLEMA !!!!
    // Convertimos el json en JavaScript
    const users = JSON.parse(jsonData);

    return users;
  }, // encuentra los productos que estan en el archivo users.json
  findById: (id) => {
    const users = modelo.findAll(); // Para utilizar this.findAll debo declarar la funcion con la palabra function
    const selectedUsers = users.find(
      (usuarioActual) => usuarioActual.id == id
    );

    return selectedUsers;
  }, // retorna productos segun su ID del archivo users.json.

  createUsers: (bodyData) => {
    let users = modelo.findAll();

    const lastUsersId = users[users.length - 1].id;

    const newUsers = {
      id: lastUsersId + 1,
      ...bodyData,
    };

    users.push(newUsers);

    const jsonData = JSON.stringify(users); // Convertimos el Javascript en JSON

    fs.writeFileSync(modelo.fileRoute, jsonData, "utf-8");

    return newUsers;
  },
  
};

module.exports = modelo;
