const submitError = require("../utils/response");

const getCart = (req, res) => {
  const id = req.params.id;

  if (id > 10) {
    const msg = {
      statusCode: 404,
      message: "No Cart Found",
    };

    return submitError(res, msg);
  }

  res.send(`<h1>Fetching cart for user with ID: ${id}</h1>`);
};

const addCart = (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Adding product to cart for user with ID: ${id}</h1>`);
};

module.exports = { addCart, getCart };
