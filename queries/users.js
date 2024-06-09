// Import the connection to the database(db)
const db = require("../db/dbConfig");

// Import Library to hash the password
const bcrypt = require("bcrypt");

// Queries for the database
// For dev purposes
const getUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    // console.log(allUsers);
    return allUsers;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE user_id=$1", id);
    // console.log(oneUser);
    return oneUser;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const createUser = async (user) => {
  try {
    const { username, email, password_hash } = user;
    const salt = 10;
    const hash = await bcrypt.hash(password_hash, salt);

    const newUser = await db.one(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at, updated_at",
      [username, email, hash]
    );
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const logInUser = async (user) => {
  try {
    const loggedInUser = await db.oneOrNone(
      "SELECT * FROM users WHERE username=$1",
      user.username
    );
    if (!loggedInUser) {
      return false;
    }
    const passwordMatch = await bcrypt.compare(
      user.password_hash,
      loggedInUser.password_hash
    );
    if (!passwordMatch) {
      return false;
    }
    // console.log(loggedInUser);
    return loggedInUser;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const updateUser = async (user, id) => {
  try {
    const { username } = user;
    const updatedUser = await db.one(
      "UPDATE users SET username=$1 WHERE user_id=$2 RETURNING *",
      [username, id]
    );
    // console.log(updatedUser);
    return updatedUser;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE user_id=$1 RETURNING *",
      id
    );
    // console.log(deletedUser);
    return deletedUser;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  logInUser,
  updateUser,
  deleteUser,
};
