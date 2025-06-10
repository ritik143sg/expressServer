const getCart = (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Fetching cart for user with ID: ${id}</h1>`);
};

const addCart = (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Adding product to cart for user with ID: ${id}</h1>`);
};

module.exports = { addCart, getCart };
