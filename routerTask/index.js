const express = require("express");
const booksRoute = require("./routes/bookRoute");
const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello World!</h1>");
});

app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
