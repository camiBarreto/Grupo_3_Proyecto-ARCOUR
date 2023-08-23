const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");

const modelo = {
  fileRoute: path.join(__dirname, "../data/users.json"),

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
     // retorna productos segun su ID del archivo users.json.
    return selectedUsers;
  },
  findByEmail:(email)=>{
    const users = modelo.findAll(); // Para utilizar this.findAll debo declarar la funcion con la palabra function
    const selectedEmail = users.find(
      (usuarioActual) => usuarioActual.correo === email
    );
     // retorna productos segun su EMAIL del archivo users.json.
    return selectedEmail;
  }, 

  createUsers: (bodyData) => {
    let users = modelo.findAll();
    
    const newUser = {
      id: uuid.v4(),
      ...bodyData,
    };
    newUser.password = bcrypt.hashSync(newUser.password,10);
    users.push(newUser);

    const jsonData = JSON.stringify(users); // Convertimos el Javascript en JSON

    fs.writeFileSync(modelo.fileRoute, jsonData, "utf-8");

    return newUser;
  },
  
};

module.exports = modelo;
