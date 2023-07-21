const path = require("path");

const controllerProduct = {
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/product-detail.html"));
      },

    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
      },
}

module.exports = controllerProduct;