const express = require("express");
const {
  getAllProduct,
  addProduct,
} = require("../controller/productController");

const productRoute = express.Router();

productRoute.get("/", getAllProduct);
productRoute.post("/", addProduct);

module.exports = productRoute;
