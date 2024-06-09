const db = require("../db/dbConfig");

const getAllCategories = async () => {
  try {
    const allCategories = await db.any("SELECT * FROM categories");
    console.log(allCategories);
    // return allCategories;
  } catch (error) {
    // console.log(allCategories);
    return error;
  }
};

const getOneCategory = async (id) => {
  try {
    const oneCategory = await db.one(
      "SELECT * FROM categories WHERE category_id=$1",
      id
    );
    // console.log(oneCategory);
    return oneCategory;
  } catch (error) {
    // console.log(oneCategory);
    return error;
  }
};

module.exports = { getAllCategories, getOneCategory };
