const express = require("express");

const itemRouter = express.Router();

itemRouter.get("/", (req, res) => {
  res.send("This is get Item Routes");
});

itemRouter.post("/", (req, res) => {
  res.send("This is post Item Routes");
});

module.exports = itemRouter;
