const express = require('express');
const router = express.Router();
const TouristSpot = require('../models/TouristSpot');

// Get all tourist spots
router.get('/', async (req, res) => {
  try {
    const spots = await TouristSpot.find();
    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tourist spot by ID
router.get('/:id', async (req, res) => {
  try {
    const spot = await TouristSpot.findById(req.params.id);
    if (!spot) {
      return res.status(404).json({ message: 'Tourist spot not found' });
    }
    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for CRUD operations

module.exports = router;