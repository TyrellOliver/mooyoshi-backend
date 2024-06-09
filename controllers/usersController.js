// Import Express
const express = require("express");
const users = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const {
  getUsers,
  getUser,
  createUser,
  logInUser,
  updateUser,
  deleteUser,
} = require("../queries/users");

// Get all Users(for dev purposes)
users.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

users.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.user);
    const oneUser = await getUser(id);
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

users.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    const token = jwt.sign(
      { userID: newUser.user_id, username: newUser.username },
      secret
    );
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

users.post("/login", async (req, res) => {
  try {
    const loggedInUser = await logInUser(req.body);
    if (!loggedInUser) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    const token = jwt.sign(
      { userID: loggedInUser.user_id, username: loggedInUser.username },
      secret
    );

    res.status(200).json({
      user: {
        user_id: loggedInUser.user_id,
        username: loggedInUser.username,
        email: loggedInUser.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

users.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(req.body, id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

users.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json({ success: "Successfully deleted profile" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
module.exports = users;
