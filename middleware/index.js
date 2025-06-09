const express = require("express");

const app = express();

const PORT = 4000;

app.use((req, res, next) => {
  req.user = "Guest";
  next();
});

app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server is up and running on port ${PORT}! Ready to handle requests.`
  );
});
