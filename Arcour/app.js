const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config()
const mainRout = require("./routers/mainRouter");
const usersRout = require("./routers/usersRouter");
const productsRout = require("./routers/productRouter");

const app = express();

app.use(express.static("public"));

app.use("/", mainRout);

app.use("/users", usersRout);

app.use("/products", productsRout);


app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en" + process.env.PORT || "http:/localhost:3000");
});
