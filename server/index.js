const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const db = require("./db");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const test = async (req, res) => {
  res.json("Test is working");
};

app.get("/", test);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
