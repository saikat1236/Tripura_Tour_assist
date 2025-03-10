const express = require('express');
const router = express.Router();
const Transport = require('../models/Transport');

// Get all transport options
router.get('/', async (req, res) => {
  try {
    const transports = await Transport.find();
    res.json(transports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get transport by ID
router.get('/:id', async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search transport options
router.get('/search', async (req, res) => {
  const { from, to, type } = req.query;
  
  try {
    const query = {};
    
    if (from) query['route.from'] = { $regex: from, $options: 'i' };
    if (to) query['route.to'] = { $regex: to, $options: 'i' };
    if (type) query.type = type;
    
    const transports = await Transport.find(query);
    res.json(transports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for CRUD operations

module.exports = router;