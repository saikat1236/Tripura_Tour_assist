const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['bus', 'train', 'cab'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  route: {
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    stops: [String]
  },
  schedule: [{
    departureTime: String,
    arrivalTime: String,
    days: [String]
  }],
  fare: {
    type: Number,
    required: true
  },
  contactInfo: String,
  description: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Transport', transportSchema);