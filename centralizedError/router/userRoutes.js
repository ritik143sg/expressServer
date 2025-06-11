const express = require("express");
const {
  getUser,
  fetchUserId,
  addUser,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/", getUser);

userRoute.get("/:id", fetchUserId);

userRoute.post("/", addUser);

module.exports = userRoute;
