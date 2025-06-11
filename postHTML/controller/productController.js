const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "form.html"));
};

const addProduct = (req, res) => {
  let { product } = req.body;
  // product = JSON.parse(product);
  res.send(product);
};

module.exports = { getAllProduct, addProduct };
