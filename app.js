// app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/dating-sim', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// create Meter model
const meterSchema = new mongoose.Schema({
  name: String,
  value: Number
});
const Meter = mongoose.model('Meter', meterSchema);

// express middleware for handling form data
app.use(express.urlencoded({ extended: true }));

// route for displaying a decision block
app.get('/decision-block-1', async (req, res) => {
  // retrieve Meter 1 and Meter 2 values from database
  const meter1 = await Meter.findOne({ name: 'Meter 1' });
  const meter2 = await Meter.findOne({ name: 'Meter 2' });

  // display initial story dialogue
  console.log('Story dialogue for decision block 1...');

  // display decision options
  console.log('Option A: ...'); // replace with option A dialogue
  console.log('Option B: ...'); // replace with option B dialogue

  // handle form submission
  app.post('/decision-block-1', async (req, res) => {
    const choice = req.body.choice;
    let meter1Change = 0;
    let meter2Change = 0;

    // determine meter changes based on choice
    if (choice === 'A') {
      // replace with option A meter changes
      meter1Change = 1;
      meter2Change = -1;
    } else if (choice === 'B') {
      // replace with option B meter changes
      meter1Change = -1;
      meter2Change = 1;
    }

    // update Meter 1 and Meter 2 values in database
    await Meter.updateOne({ name: 'Meter 1' }, { $inc: { value: meter1Change } });
    await Meter.updateOne({ name: 'Meter 2' }, { $inc: { value: meter2Change } });

    // display subsequent story dialogue based on choice
    if (choice === 'A') {
      console.log('Subsequent dialogue for option A...');
    } else if (choice === 'B') {
      console.log('Subsequent dialogue for option B...');
    }

    // redirect back to decision block page
    res.redirect('/decision-block-1');
  });

  // render form for submitting choice
  res.send(`
    <form method="post">
      <label>Choice:</label>
      <input type="radio" name="choice" value="A"> Option A<br>
      <input type="radio" name="choice" value="B"> Option B<br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

