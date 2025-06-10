const getProduct = (req, res) => {
  res.send(`<h1>Fetch All Products: </h1>`);
};

const fetchProductId = (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
};

const addProduct = (req, res) => {
  res.send("<h1>Adding a new product</h1>");
};

module.exports = { getProduct, fetchProductId, addProduct };
