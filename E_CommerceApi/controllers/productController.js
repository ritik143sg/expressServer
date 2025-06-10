const {
  allProduct,
  productById,
  newProduct,
} = require("../services/productService");

const getProducts = (req, res) => {
  res.send(allProduct());
};

const addProduct = (req, res) => {
  res.send(newProduct());
};

const getProductById = (req, res) => {
  res.send(productById(req));
};

module.exports = { getProductById, getProducts, addProduct };
