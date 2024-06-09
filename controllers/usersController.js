// Import Express
const express = require("express");
const users = express.Router();

const { createUser, getUsers } = require("../queries/users");

// Get all Users(for dev purposes)
users.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// users.post("/", (req, res) =>{
//   try {

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// })

module.exports = users;
