const mongoose = require('mongoose');

const meterSchema = new mongoose.Schema({
  gpa: {
    type: Number,
    min: 0.00,
    max: 4.00,
    default: 2.00,
    get: v => Math.round(v * 10) / 10,
    set: v => Math.round(v * 10) / 10,
  },
  frenemyPoints: {
    type: Number,
    min: 1,
    max: 7,
    default: 4,
    get: v => Math.round(v * 10) / 10,
    set: v => Math.round(v * 10) / 10,
  },
});

module.exports = mongoose.model('Meter', meterSchema);
