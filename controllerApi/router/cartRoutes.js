const express = require("express");
const { getCart, addCart } = require("../controllers/cartController");

const cartRoute = express.Router();

cartRoute.get("/:id", getCart);

cartRoute.post("/:id", addCart);

module.exports = cartRoute;
