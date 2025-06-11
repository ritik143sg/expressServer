const submitError = require("../utils/response");

const getProduct = (req, res) => {
  res.send(`<h1>Fetch All Products: </h1>`);
};

const fetchProductId = (req, res) => {
  const id = req.params.id;

  if (id > 10) {
    const msg = {
      statusCode: 404,
      message: "Product Not Found",
    };

    return submitError(res, msg);
  }

  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
};

const addProduct = (req, res) => {
  res.send("<h1>Adding a new product</h1>");
};

module.exports = { getProduct, fetchProductId, addProduct };
