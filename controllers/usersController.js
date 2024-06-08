// Import Express
const express = require("express");
const users = express.Router();

users.get("/", (req, res) => {
  try {
    res.status(200).json({ Success: "It's working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = users;
