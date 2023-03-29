import express from 'express';
import Decision from '../models/decision.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Get the prologue decision from the database
    const decision = await Decision.findOne({ type: 'prologue' });

    // Render the prologue page with the decision content and choices
    res.render('prologue', { decision });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
