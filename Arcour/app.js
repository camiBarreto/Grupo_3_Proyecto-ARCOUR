const express = require("express");
const path = require("path");
const mainRout = require("./routers/mainRouter");
const usersRout = require("./routers/usersRouter");
const productsRout = require("./routers/productRouter");

const app = express();

app.use(express.static("public"));

app.use("/", mainRout);

app.use("/users", usersRout);

app.use("/products", productsRout);


app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000 | http://localhost:3000");
});
