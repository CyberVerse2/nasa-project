const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: {
    type: [String],
  },
  upcoming: {
    type: Boolean,
    requried: true,
  },
  success: {
    type: Boolean,
    requried: true,
    default: true,
  },
});

module.exports = mongoose.model("Launch", launchesSchema);
