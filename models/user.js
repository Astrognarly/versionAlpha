import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Define the user schema fields here
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
