const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/contacto.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/contacto.html"));
});

app.get("/nuestra-empresa.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/nuestra-empresa.html"));
});

app.get("/empresas-amigas.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/empresas-amigas.html"));
});

app.get("/buenosAires.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/buenosAires.html"));
});

app.get("/bogota.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/bogota.html"));
});

app.get("/montevideo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/montevideo.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/product-cart.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product-cart.html"));
});

app.get("/product-detail.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product-detail.html"));
});

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000 | http://localhost:3000");
});
