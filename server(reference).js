// import express from 'express';
// import mongoose from 'mongoose';
// // const express = require('express');
// // const mongoose = require('mongoose');
// const app = express();
// const PORT = 4200;

// // Connect to MongoDB database
// mongoose.connect('mongodb://localhost/dating-sim-game', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define schema for decision blocks
// const decisionSchema = new mongoose.Schema({
//   id: Number,
//   description: String,
//   outcome: String,
// });

// // Define schema for prologue block
// const prologueSchema = new mongoose.Schema({
//   text: String,
//   decisionBlocks: [decisionSchema],
// });

// // Define schema for final block
// const finalSchema = new mongoose.Schema({
//   text: String,
// });

// // Define models for each schema
// const Decision = mongoose.model('Decision', decisionSchema);
// const Prologue = mongoose.model('Prologue', prologueSchema);
// const Final = mongoose.model('Final', finalSchema);

// // Define routes
// app.get('/prologue', async (req, res) => {
//   const prologue = await Prologue.findOne();
//   res.send(prologue);
// });

// app.get('/decision/:id', async (req, res) => {
//   const decision = await Decision.findOne({ id: req.params.id });
//   res.send(decision);
// });

// app.get('/final', async (req, res) => {
//   const final = await Final.findOne();
//   res.send(final);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
