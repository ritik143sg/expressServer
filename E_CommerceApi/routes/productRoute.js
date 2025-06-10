const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/", getProducts);

productRoute.get("/:id", getProductById);

productRoute.post("/", addProduct);

module.exports = productRoute;
