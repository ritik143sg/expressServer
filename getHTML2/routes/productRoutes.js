const express = require("express");
const getAllProduct = require("../controller/productController");

const productRoute = express.Router();

productRoute.get("/", getAllProduct);

module.exports = productRoute;
