// Import the connection to the database(db)
const db = require("../db/dbConfig");

// Import Library to hash the password
const bcrypt = require("bcrypt");

// Queries for the database
const createUser = async (user) => {
  try {
    const { username, email, password_hash } = profile;
    const salt = 10;
    const hash = await bcrypt.hash(password_hash, salt);

    const newUser = await db.one(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password_hash]
    );
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// For dev purposes
const getUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    console.log(allUsers);
    return allUsers;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createUser, getUsers };
