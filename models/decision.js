const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  outcome1: {
    type: String,
    required: true,
  },
  outcome2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Decision', decisionSchema);
