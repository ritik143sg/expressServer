const express = require("express");

const booksRoute = express.Router();

booksRoute.get("/", (req, res) => {
  res.send("<h1>Here is the list of books!</h1>");
});

booksRoute.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Book has been added!");
});

module.exports = booksRoute;
