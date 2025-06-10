const express = require("express");
const courses = require("../data/courseData");

const courseRoute = express.Router();
const course = courses;

courseRoute.get("/", (req, res) => {
  res.send(
    `<h1>Course : ${course.map((course) => {
      return " " + course.name;
    })} </h1>`
  );
});

courseRoute.get("/:id", (req, res) => {
  const id = req.params.id;

  course.filter((course) => {
    if (course.id == id) {
      res.send(
        `<h1>Course :${course.name}, Description: ${course.description} </h1>`
      );
    }
  });

  res.send(`<h1>Course not found</h1>`);
});

// courseRoute.post("/", (req, res) => {
//   res.send("<h1>Post course</h1>");
// });

module.exports = courseRoute;
