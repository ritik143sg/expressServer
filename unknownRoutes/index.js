const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/products", (req, res) => {
  res.send("<h1>Here is the list of all products.</h1>");
});
app.post("/products", (req, res) => {
  res.send("<h1>A new product has been created.</h1>");
});
app.get("/categories", (req, res) => {
  res.send("<h1>Here is the list of all categories.</h1>");
});
app.post("/categories", (req, res) => {
  res.send("<h1>A new category has been added.<h1>");
});

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
