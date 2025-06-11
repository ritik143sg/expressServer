const express = require("express");
const getAllProduct = require("../controller/productControllers");

const productRoute = express.Router();

productRoute.get("/", getAllProduct);

module.exports = productRoute;
