import express from 'express';
import { validateUser } from '../utils/validation';
import { Choice1, Choice2 } from '../utils/dialogues';
import User from '../models/user';
import GameState from '../models/gamestate';

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, choice } = req.body;
  try {
    // Validate user
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).send('Invalid user ID.');
    }

    // Update meter values based on choice
    let meter1, meter2;
    if (choice === 'choice1') {
      meter1 = user.meter1 + 10;
      meter2 = user.meter2 - 5;
    } else if (choice === 'choice2') {
      meter1 = user.meter1 - 5;
      meter2 = user.meter2 + 10;
    } else {
      return res.status(400).send('Invalid choice.');
    }

    // Update user's meter values
    user.meter1 = meter1;
    user.meter2 = meter2;
    await user.save();

    // Update game state
    const gameState = await GameState.findOne();
    gameState.decision1 = choice;
    gameState.meter1 = meter1;
    gameState.meter2 = meter2;
    await gameState.save();

    // Send response with updated meter values and corresponding dialogue
    let dialogue;
    if (choice === 'choice1') {
      dialogue = Choice1;
    } else if (choice === 'choice2') {
      dialogue = Choice2;
    }
    res.status(200).json({ meter1, meter2, dialogue });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error.');
  }
});

export default router;
