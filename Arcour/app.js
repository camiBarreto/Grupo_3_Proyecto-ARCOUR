const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const mainRouter = require("./routers/mainRouter");
const userRouter = require("./routers/usersRouter");
const productRouter = require("./routers/productRouter");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

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
