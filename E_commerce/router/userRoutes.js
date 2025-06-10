const express = require("express");

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send(`<h1>Fetching all users </h1>`);
});

userRoute.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Fetching user with ID:  ${id}</h1>`);
});

userRoute.post("/", (req, res) => {
  res.send("<h1>Adding a new user</h1>");
});

module.exports = userRoute;
