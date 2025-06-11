const express = require("express");
const productRoute = require("./routes/productRoutes");

const app = express();
const PORT = 5000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("<h1>HTML in Get Request</h1>");
});

// Product form route
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
