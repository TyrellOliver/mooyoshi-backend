const express = require("express");
const categories = express.Router();

const { getAllCategories, getOneCategory } = require("../queries/categories");

categories.get("/", async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categories.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneCategory = await getOneCategory(id);
    res.status(200).json(oneCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = categories;
