const express = require("express");
const locations = express.Router();

const {
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  deleteLocation,
} = require("../queries/locations");

locations.get("/", async (req, res) => {
  try {
    const allLocations = await getAllLocations();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

locations.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneLocation = await getOneLocation(id);
    res.status(200).json(oneLocation);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

locations.post("/", async (req, res) => {
  try {
    const newLocation = await createLocation(req.body);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

locations.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedLocation = await updateLocation(id, body);
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

locations.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLocation = await deleteLocation(id);
    res.status(200).json({ Success: "Successfully deleted the location" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = locations;
