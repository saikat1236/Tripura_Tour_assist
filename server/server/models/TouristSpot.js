const mongoose = require('mongoose');

const touristSpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [String],
  openingHours: {
    open: String,
    close: String,
    holidays: [String]
  },
  entryFee: Number,
  ratings: {
    type: Number,
    min: 1,
    max: 5,
    default: 4
  },
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
  }],
  transportOptions: [{
    type: {
      type: String,
      enum: ['bus', 'train', 'cab']
    },
    description: String,
    fare: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('TouristSpot', touristSpotSchema);