const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "index.html"));
};

module.exports = getAllProduct;
