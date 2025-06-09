const express = require("express");
const orderRouter = require("./routes/orderRoute");
const itemRouter = require("./routes/itemRoute");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/order", orderRouter);
app.use("/item", itemRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
