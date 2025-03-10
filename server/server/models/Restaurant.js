const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  cuisine: [String],
  priceRange: {
    type: String,
    enum: ['budget', 'moderate', 'expensive'],
    default: 'moderate'
  },
  ratings: {
    type: Number,
    min: 1,
    max: 5,
    default: 4
  },
  specialties: [String],
  openingHours: {
    open: String,
    close: String,
    holidays: [String]
  },
  contactInfo: {
    phone: String,
    email: String,
    website: String
  },
  images: [String],
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    rating: Number,
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);