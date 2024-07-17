const express = require("express");
require('dotenv');
require("./db");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Shivang ");
});

const PORT = process.env.PORT||8080;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port.`);
});
