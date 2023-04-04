import express from 'express';
import { validateUser } from '../utils/validation';
import { Prologue } from '../utils/dialogues';
import User from '../models/user';
import GameState from '../models/gamestate';

const router = express.Router();

// GET prologue
router.get('/', async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ username: req.session.username });
    if (!user) {
      return res.redirect('/login');
    }
    // Create or retrieve gamestate for the user
    let gameState = await GameState.findOne({ user: user._id });
    if (!gameState) {
      gameState = new GameState({
        user: user._id,
        meters: {
          meter1: 0,
          meter2: 0,
        },
        currentDialogue: Prologue,
      });
      await gameState.save();
    }
    res.render('prologue', { gameState });
  } catch (err) {
    console.error(err);
    res.redirect('/error');
  }
});

// POST prologue
router.post('/', async (req, res) => {
  try {
    const { choice } = req.body;
    const user = await User.findOne({ username: req.session.username });
    let gameState = await GameState.findOne({ user: user._id });
    if (!gameState) {
      throw new Error('Game state not found');
    }
    // Update meters based on choice
    switch (choice) {
      case '1':
        gameState.meters.meter1 += 1;
        gameState.currentDialogue = Prologue.Choice1;
        break;
      case '2':
        gameState.meters.meter2 += 1;
        gameState.currentDialogue = Prologue.Choice2;
        break;
      default:
        throw new Error('Invalid choice');
    }
    await gameState.save();
    res.redirect('/decision1');
  } catch (err) {
    console.error(err);
    res.redirect('/error');
  }
});

export default router;
