import express from 'express';
import mongoose from 'mongoose';
import { port } from './utils/config';
import { logError, logInfo } from './utils/logger';

const app = express();

// Middlewares

app.use(express.json());

// Routes

import indexRouter from './routes/index';
import prologueRouter from './routes/prologue';
import decision1Router from './routes/decision1';
import decision16Router from './routes/decision16';
import finalEndingRouter from './routes/final-ending';

app.use('/', indexRouter);
app.use('/prologue', prologueRouter);
app.use('/decision1', decision1Router);
app.use('/decision16', decision16Router);
app.use('/final-ending', finalEndingRouter);

// Error handling middleware

app.use((err, req, res, next) => {
  logError(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server

mongoose
  .connect('mongodb://localhost/dating-sim', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      logInfo(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    logError(err.stack);
  });
