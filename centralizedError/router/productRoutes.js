const express = require("express");
const {
  getProduct,
  fetchProductId,
  addProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/", getProduct);

productRoute.get("/:id", fetchProductId);

productRoute.post("/", addProduct);

module.exports = productRoute;
