const submitError = require("../utils/response");

const getUser = (req, res) => {
  res.send(`<h1>Fetching all users </h1>`);
};

const fetchUserId = (req, res) => {
  const id = req.params.id;

  if (id > 10) {
    const msg = {
      statusCode: 404,
      message: "User Not Found",
    };

    return submitError(res, msg);
  }

  res.send(`<h1>Fetching user with ID:  ${id}</h1>`);
};

const addUser = (req, res) => {
  res.send("<h1>Adding a new user</h1>");
};

module.exports = { getUser, fetchUserId, addUser };
