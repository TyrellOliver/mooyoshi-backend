// Dependancies
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes/Base Url
app.get("/", (req, res) => {
  res.json({ index: "This is the index page" });
});

module.exports = app;