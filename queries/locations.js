const db = require("../db/dbConfig");

const getAllLocations = async () => {
  try {
    const allLocations = await db.any("SELECT * FROM locations");
    // console.log(allLocations);
    return allLocations;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const getOneLocation = async (id) => {
  try {
    const oneLocation = await db.any(
      "SELECT * FROM locations WHERE location_id=$1",
      id
    );
    // console.log(oneLocation);
    return oneLocation;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

module.exports = { getAllLocations, getOneLocation };
