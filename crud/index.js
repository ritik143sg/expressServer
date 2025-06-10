const express = require("express");
const courseRoute = require("./routes/courseRoute");
const studentRoute = require("./routes/studentRoute");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Student & Course Portal API!</h1>");
});

app.use("/courses", courseRoute);

app.use("/students", studentRoute);

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
