const express = require("express");
const locations = express.Router();

const { getAllLocations, getOneLocation } = require("../queries/locations");

locations.get("/", async (req, res) => {
  try {
    const allLocations = await getAllLocations();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

locations.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneLocation = await getOneLocation(id);
    res.status(200).json(oneLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = locations;
