const path = require("path");

const controllerProduct = {
    productDetail: (req, res) => {
        res.render("product-detail");
      },

    productCart: (req, res) => {
        res.render("productCart");
      },
}

module.exports = controllerProduct;