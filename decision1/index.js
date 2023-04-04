import express from 'express';
import { validateUser } from '../utils/validation';
import { Decision1 } from '../utils/dialogues';
import User from '../models/user';
import GameState from '../models/gamestate';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, decision1 } = req.body;

    // Validate user input
    const validationError = validateUser({ username, decision1 });
    if (validationError) {
      return res.status(400).send({ error: validationError });
    }

    // Find or create user
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username });
      await user.save();
    }

    // Update game state with decision1
    const gameState = await GameState.findOne({ user: user.id });
    if (gameState) {
      gameState.decision1 = decision1;
      await gameState.save();
    } else {
      const newGameState = new GameState({
        user: user.id,
        decision1,
      });
      await newGameState.save();
    }

    // Send next dialogue
    const nextDialogue = Decision1.getNextDialogue(decision1);
    res.send({ dialogue: nextDialogue });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

export default router;
