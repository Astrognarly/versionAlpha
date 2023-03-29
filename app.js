const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4200;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/roommateSimulator', { useNewUrlParser: true, useUnifiedTopology: true });

// Import routes
const indexRouter = require('./routes/index');
const prologueRouter = require('./routes/prologue');
const decision1Router = require('./routes/decision-1');
const decision2Router = require('./routes/decision-2');
const decision3Router = require('./routes/decision-3');
const decision4Router = require('./routes/decision-4');
const decision5Router = require('./routes/decision-5');
const decision6Router = require('./routes/decision-6');
const decision7Router = require('./routes/decision-7');
const decision8Router = require('./routes/decision-8');
const decision9Router = require('./routes/decision-9');
const decision10Router = require('./routes/decision-10');
const decision11Router = require('./routes/decision-11');
const decision12Router = require('./routes/decision-12');
const decision13Router = require('./routes/decision-13');
const decision14Router = require('./routes/decision-14');
const decision15Router = require('./routes/decision-15');
const decision16Router = require('./routes/decision-16');
const endingRouter = require('./routes/ending');

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes
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
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
