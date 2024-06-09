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

const createLocation = async (location) => {
  try {
    const {
      location_name,
      location_description,
      location_address,
      location_latitude,
      location_longitude,
    } = location;

    const newLocation = await db.one(
      "INSERT INTO locations (location_name, location_description, location_address, location_latitude, location_longitude, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        location_name,
        location_description,
        location_address,
        location_latitude,
        location_longitude,
        new Date(),
        new Date(),
      ]
    );
    // console.log(newLocation);
    return newLocation;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const updateLocation = async (id, location) => {
  try {
    const {
      location_name,
      location_description,
      location_address,
      location_latitude,
      location_longitude,
    } = location;
    const updatedLocation = await db.one(
      "UPDATE locations SET location_name=$1, location_description=$2, location_address=$3, location_latitude=$4, location_longitude=$5, created_at=$6, updated_at=$7 WHERE location_id=$8 RETURNING *",
      [
        location_name,
        location_description,
        location_address,
        location_latitude,
        location_longitude,
        new Date(),
        new Date(),
        id,
      ]
    );
    // console.log(updatedLocation);
    return updatedLocation;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const deleteLocation = async (id) => {
  try {
    const deletedLocation = await db.one(
      "DELETE FROM locations WHERE location_id=$1 RETURNING *",
      id
    );
    console.log(deletedLocation);
    return deletedLocation;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};
