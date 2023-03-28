const express = require('express');
const { Meter } = require('../models');

const router = express.Router();

// Starting block
router.get('/', (req, res) => {
  res.send('This is the starting block!');
});

// Decision block 1
router.get('/decision1', (req, res) => {
  res.send('This is decision block 1!');
});

// Decision block 2
router.get('/decision2', (req, res) => {
  res.send('This is decision block 2!');
});

// ...

// Decision block 16
router.get('/decision16', (req, res) => {
  res.send('This is decision block 16!');
});

// Ending block
router.get('/ending', (req, res) => {
  res.send('This is the ending block!');
});

module.exports = router;
