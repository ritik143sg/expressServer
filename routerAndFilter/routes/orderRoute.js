const express = require("express");

const orderRouter = express.Router();

orderRouter.get("/", (req, res) => {
  res.send("This is get Order Routes");
});

orderRouter.post("/", (req, res) => {
  res.send("This is post Order Routes");
});

module.exports = orderRouter;
