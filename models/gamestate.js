import mongoose from 'mongoose';

const GameStateSchema = new mongoose.Schema({
  // Define the game state schema fields here
}, { timestamps: true });

export default mongoose.model('GameState', GameStateSchema);
