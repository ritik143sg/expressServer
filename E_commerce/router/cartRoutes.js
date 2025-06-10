const express = require("express");

const cartRoute = express.Router();

cartRoute.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Fetching cart for user with ID: ${id}</h1>`);
});

cartRoute.post("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Adding product to cart for user with ID: ${id}</h1>`);
});

module.exports = cartRoute;
