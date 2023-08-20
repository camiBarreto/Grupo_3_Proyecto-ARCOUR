//Dependencies requires
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const session = require("express-session");


//PORT
const port = process.env.PORT || 3000;

//Routers requires
const mainRouter = require("./routers/mainRouter");
const userRouter = require("./routers/usersRouter");
const productRouter = require("./routers/productRouter");

//Middlewares requires
const isLoggedMiddleware = require("./middlewares/isLoggedMiddleware")
const notFoundMiddleware = require("./middlewares/middleware404")

//Application express
const app = express();

//EJS
app.set("view engine", "ejs");

//EJS routes
app.set("views", [
  path.join(__dirname, "./views/main"),
  path.join(__dirname, "./views/users"),
  path.join(__dirname, "./views/products"),
  path.join(__dirname, "./views/partials"),
]);


//Application dependencies middlewares
app.use(session({
  secret:"mariano la maquina",
  resave: false,
  saveUninitialized: true
}));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride("_method"));

//Locals application middlewares
app.use(isLoggedMiddleware);


//Router middlewares
app.use("/", mainRouter);

app.use("/users", userRouter);

app.use("/products", productRouter);

//Not found Middleware (debe ir aqui o si no se rompe el codigo (lo digo despues de 2 horas de frustracion))
app.use(notFoundMiddleware);

//Server start (Entry point)
app.listen(port || 3000, () => {
  console.log(
    "Servidor escuchando en puerto " + port + "| http://localhost:" + port ||
      3000
  );
});

