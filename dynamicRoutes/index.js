const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;
  const role = req.query.role;

  res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
