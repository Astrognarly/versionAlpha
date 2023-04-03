import express from 'express';
import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import prologueRouter from './routes/prologue.js';
import decision1Router from './routes/decision1.js';
import decision2Router from './routes/decision2.js';
import decision3Router from './routes/decision3.js';
import decision4Router from './routes/decision4.js';
import decision5Router from './routes/decision5.js';
import decision6Router from './routes/decision6.js';
import decision7Router from './routes/decision7.js';
import decision8Router from './routes/decision8.js';
import decision9Router from './routes/decision9.js';
import decision10Router from './routes/decision10.js';
import decision11Router from './routes/decision11.js';
import decision12Router from './routes/decision12.js';
import decision13Router from './routes/decision13.js';
import decision14Router from './routes/decision14.js';
import decision15Router from './routes/decision15.js';
import decision16Router from './routes/decision16.js';
import endingRouter from './routes/ending.js';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dating-sim', { useNewUrlParser: true, useUnifiedTopology: true });

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure routes
app.use('/', indexRouter);
app.use('/prologue', prologueRouter);
app.use('/decision-1', decision1Router);
app.use('/decision-2', decision2Router);
app.use('/decision-3', decision3Router);
app.use('/decision-4', decision4Router);
app.use('/decision-5', decision5Router);
app.use('/decision-6', decision6Router);
app.use('/decision-7', decision7Router);
app.use('/decision-8', decision8Router);
app.use('/decision-9', decision9Router);
app.use('/decision-10', decision10Router);
app.use('/decision-11', decision11Router);
app.use('/decision-12', decision12Router);
app.use('/decision-13', decision13Router);
app.use('/decision-14', decision14Router);
app.use('/decision-15', decision15Router);
app.use('/decision-16', decision16Router);
app.use('/ending', endingRouter);

// Start server
app.listen(4200, () => console.log('Server started on port 4200'));
