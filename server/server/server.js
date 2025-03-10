const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const transportRoutes = require('./routes/transportRoutes');
const tourismRoutes = require('./routes/tourismRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/transport', transportRoutes);
app.use('/api/tourism', tourismRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Travel Assistance API is running');
});

// Start server
// Change the port from 5000 to 5001 or another available port
const PORT = process.env.PORT || 5001;

// Make sure this line is at the bottom of your server.js file
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});