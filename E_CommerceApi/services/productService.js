const allProduct = () => {
  return "<h1>Fetching all products</h1>";
};

const productById = (req) => {
  const id = req.params.id;
  return `<h1>Fetching product with ID: ${id}</h1>`;
};

const newProduct = () => {
  return "<h1>Adding a new product</h1>";
};

module.exports = { allProduct, productById, newProduct };
