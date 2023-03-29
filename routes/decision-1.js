const express = require('express');
const router = express.Router();
const Decision = require('../models/decision');

router.get('/', async (req, res) => {
  const decision = await Decision.findOne({ title: 'Decision 1' });
  res.send(`Title: ${decision.title}\nDescription: ${decision.description}\nOutcome 1: ${decision.outcome1}\nOutcome 2: ${decision.outcome2}`);
});

module.exports = router;
