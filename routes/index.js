const express = require('express');
const router = express.Router();

const Prologue = require('./prologue');
const Decision1 = require('./decision-1');
const Decision2 = require('./decision-2');
// ...
const Decision16 = require('./decision-16');
const Ending = require('./ending');

router.use('/prologue', Prologue);
router.use('/decision1', Decision1);
router.use('/decision2', Decision2);
// ...
router.use('/decision16', Decision16);
router.use('/ending', Ending);

module.exports = router;
