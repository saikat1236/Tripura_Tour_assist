const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search restaurants
router.get('/search', async (req, res) => {
  const { cuisine, priceRange, location } = req.query;
  
  try {
    const query = {};
    
    if (cuisine) query.cuisine = { $in: [cuisine] };
    if (priceRange) query.priceRange = priceRange;
    if (location) query.location = { $regex: location, $options: 'i' };
    
    const restaurants = await Restaurant.find(query);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for CRUD operations

module.exports = router;