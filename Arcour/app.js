const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const methodOverride = require("method-override");

const port = process.env.PORT || 3000;

const mainRouter = require("./routers/mainRouter");
const userRouter = require("./routers/usersRouter");
const productRouter = require("./routers/productRouter");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.set("views", [
  path.join(__dirname, "./views/main"),
  path.join(__dirname, "./views/users"),
  path.join(__dirname, "./views/products"),
  path.join(__dirname, "./views/partials"),
]);

app.use("/", mainRouter);

app.use("/users", userRouter);

app.use("/products", productRouter);

app.listen(port || 3000, () => {
  console.log(
    "Servidor escuchando en puerto " + port + "| http://localhost:" + port ||
      3000
  );
});


/*  1. Controller de User que se conecte con los modelos respectivos, para manejar los datos de users.json.
    2. Crear la vista de formulario de creacion de productos ejs. 
    3. Conectar el product-detail con los datos de los productos para mostrarlos de forma dinámica.
    4. Agregar barra de busqueda del home.
*/
