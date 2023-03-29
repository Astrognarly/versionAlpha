const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Congratulations, you have reached the ending!');
});

module.exports = router;
