const express = require("express");

const productRoute = express.Router();

productRoute.get("/", (req, res) => {
  res.send(`<h1>Fetch All Products: </h1>`);
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
});

productRoute.post("/", (req, res) => {
  res.send("<h1>Adding a new product</h1>");
});

module.exports = productRoute;
