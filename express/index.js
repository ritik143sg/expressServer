const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World<h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server is up and running on port ${PORT}! Ready to handle requests.`
  );
});
