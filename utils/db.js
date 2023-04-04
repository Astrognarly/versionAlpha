import mongoose from 'mongoose';
import { dbUri } from './config';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Error connecting to database:', error));

export default mongoose.connection;
