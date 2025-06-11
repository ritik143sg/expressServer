const express = require("express");
const userRoute = require("./router/userRoutes");
const productRoute = require("./router/productRoutes");
const cartRoute = require("./router/cartRoutes");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the E-Commrece Startup</h1>");
});

app.use("/users", userRoute);

app.use("/products", productRoute);

app.use("/cart", cartRoute);

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
