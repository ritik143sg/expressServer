const express = require("express");
const students = require("../data/studentData");

const studentRoute = express.Router();

studentRoute.get("/", (req, res) => {
  res.send(
    `<h1>Students: ${students.map((student) => {
      return " " + student.name;
    })}</h1>`
  );
});

studentRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  students.filter((student) => {
    if (student.id == id) {
      res.send(`<h1>Student :${student.name} </h1>`);
    }
  });

  res.send(`<h1>Student not found</h1>`);
});

// studentRoute.post("/", (req, res) => {
//   res.send("Post Student");
// });

module.exports = studentRoute;
