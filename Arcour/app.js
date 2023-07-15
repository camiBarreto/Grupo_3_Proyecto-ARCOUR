const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/contacto.html"));
});

app.get("/nuestra-empresa", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/nuestra-empresa.html"));
});

app.get("/empresas-amigas", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/empresas-amigas.html"));
});

app.get("/buenosAires", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/buenosAires.html"));
});

app.get("/bogota", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/bogota.html"));
});

app.get("/montevideo", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/montevideo.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/product-cart", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productCart.html"));
});

app.get("/product-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product-detail.html"));
});

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000 | http://localhost:3000");
});
