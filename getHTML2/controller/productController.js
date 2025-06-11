const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "form.html"));
};

module.exports = getAllProduct;
