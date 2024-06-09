// Dependancies
const express = require("express");
const cors = require("cors");
const app = express();

// Imports
const usersController = require("./controllers/usersController");
const categoriesController = require("./controllers/categoriesController");
const locationsController = require("./controllers/locationsController")

// Middleware
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/categories", categoriesController);
app.use("/locations", locationsController);

// Routes/Base Url
app.get("/", (req, res) => {
  res.json({ index: "This is the index page" });
});

module.exports = app;
