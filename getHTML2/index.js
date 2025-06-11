const express = require("express");
const productRoute = require("./routes/productRoutes");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>HTML in Get Request</h1>");
});

app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
