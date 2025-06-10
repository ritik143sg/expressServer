const express = require("express");
const productRoute = require("./routes/productRoute");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Services in NodeJS</h1>");
});

app.use("/products", productRoute);

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
