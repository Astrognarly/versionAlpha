const express = require('express');
const router = express.Router();

// Set up the Prologue block
router.get('/', (req, res) => {
  const playerName = req.query.playerName;
  if (!playerName) {
    return res.status(400).send('Error: player name not provided.');
  }
  res.send(`Welcome, ${playerName}! This is the Prologue block.`);
});

module.exports = router;
